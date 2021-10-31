import React, { useState, useEffect } from "react";
import Month from "./Month";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "../CSS/Calendar-App.css";

function App() {
  const appointmentArray = [1];
  const [hours, setHours] = useState(`${new Date().getHours()} :`);
  const [minutes, setMinutes] = useState(`${new Date().getMinutes()} :`);
  const [secconds, setSeconds] = useState(new Date().getSeconds());
  const [appointment, setAppointment] = useState("");
  const year = new Date().getFullYear();
  const [inputValue, setInputValue] = useState(
    () => window.localStorage.getItem("inputValue") || ""
  );

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick2() {
    setAppointment("");
    window.localStorage.clear();
  }

  function handleClick() {
    if (
      inputValue !== "" &&
      window.localStorage.getItem("monthHistory") &&
      window.localStorage.getItem("dayHistory")
    ) {
      setAppointment(
        appointmentArray.map((item, index) => (
          <div
            className="container-fluid px-2 py-0 mt-3 text-start position-relative"
            key={index}
          >
            <h4>{inputValue}</h4>
            <p className="border-bottom border-2 my-0 pb-2 border-muted">
              {window.localStorage.getItem("monthHistory")} -{" "}
              {window.localStorage.getItem("dayHistory")} - {year}
            </p>
            <h4 className="my-3 text-start px-2">Maked with react</h4>
            <button
              className="btn btn-close position-absolute"
              onClick={handleClick2}
            ></button>
          </div>
        ))
      );
    }
  }

  useEffect(() => {
    window.localStorage.setItem("inputValue", inputValue);
  }, [inputValue]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHours(`${new Date().getHours()} :`);
      setMinutes(`${new Date().getMinutes()} :`);
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [secconds]);

  return (
    <div className="container-fluid pt-3 my-4 table-container px-0 text-center border shadow-sm rounded-3">
      <h2 className="calender-titles text-nowrap text-start mx-2 mb-3">
        Calender
      </h2>
      <h5 className="calender-titles text-nowrap text-start mx-2 mb-3">
        Appointments
      </h5>
      <h6 className="calender-titles text-nowrap text-start mx-2">
        Make a new appointment
      </h6>
      <div className="container-fluid text-start px-2 mx-0 d-flex position-relative">
        <input
          type="text"
          placeholder="write an appointment"
          className="appointment-input mb-3"
          onChange={handleChange}
          value={inputValue}
        />
        <span className="position-absolute required">*</span>
      </div>
      <Month />
      <div className="container-fluid text-center">
        <span>
          {hours} {minutes} {secconds}
        </span>
      </div>
      <div className="container-fluid text-start px-2 mx-0">
        <button
          className="btn btn-danger text-white mt-3 mb-2"
          type="button"
          onClickCapture={handleClick}
        >
          Make Appointment
        </button>
      </div>
      {appointment}
    </div>
  );
}

export default App;
