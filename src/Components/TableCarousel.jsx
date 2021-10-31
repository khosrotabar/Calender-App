import React, { useState, useEffect } from "react";
import Table from "./Table";
import { Months } from "./DateData";
import "../CSS/Calender-App.css";

function TableCrousel(props) {
  const [monthsArray, setMonthsArray] = useState(Months);
  const thisMonth = props.thisMonth;

  useEffect(() => {
    setMonthsArray(
      monthsArray.map((month) =>
        month.month === thisMonth
          ? {
              ...monthsArray,
              active: "active",
              month: month.month,
              id: month.id
            }
          : { ...monthsArray, active: "", month: month.month, id: month.id }
      )
    );
  }, [thisMonth]);

  const CarouselSlides = monthsArray.map((item, index) => (
    <div key={index} className={`carousel-item px-1 ${item.active}`}>
      <Table
        item={item}
        year={props.year}
        day={props.day}
        thisMonth={props.thisMonth}
      />
    </div>
  ));

  return (
    <div
      className="carousel slide"
      id="calenderSlideShow"
      data-bs-ride="carousel"
      data-bs-interval="false"
    >
      <div className="carousel-inner">{CarouselSlides}</div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#calenderSlideShow"
        data-bs-slide="prev"
      >
        <img
          src="https://img.icons8.com/material-sharp/30/000000/circled-chevron-right.png"
          className="flipIconPrev"
          alt=""
        />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#calenderSlideShow"
        data-bs-slide="next"
      >
        <img
          src="https://img.icons8.com/material-sharp/30/000000/circled-chevron-right.png"
          alt=""
        />
      </button>
    </div>
  );
}

export default TableCrousel;
