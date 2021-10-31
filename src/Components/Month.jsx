import React, { useState, useEffect } from "react";
import "../CSS/Calender-App.css";
import TableCrousel from "./TableCarousel";

function Month() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    setDay(new Date().getDate());
    setMonth(new Date().toLocaleString("default", { month: "long" }));
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <TableCrousel thisMonth={month} year={year} day={day} />
    </div>
  );
}

export default Month;
