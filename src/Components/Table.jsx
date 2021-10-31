import React, { useEffect, useState } from "react";
import { Weeks } from "./DateData";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import {
  JanuaryDays,
  FebruaryDays,
  MarchDays,
  AprilDays,
  MayDays,
  JuneDays,
  JulyDays,
  AugustDays,
  SeptemberyDays,
  OctoberDays,
  NovemberDays,
  DecemberDays
} from "./DateData";
import "../CSS/Calendar-App.css";

function Table(props) {
  const [dayHistory, setDayHistory] = useState(
    () => window.localStorage.getItem("dayHistory") || ""
  );

  const [monthHistory, setMonthHistory] = useState(
    () => window.localStorage.getItem("monthHistory") || ""
  );

  // Custom days for each month
  const tableData1 =
    props.item.month === "January" &&
    JanuaryDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData2 =
    props.item.month === "February" &&
    FebruaryDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData3 =
    props.item.month === "March" &&
    MarchDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData4 =
    props.item.month === "April" &&
    AprilDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData5 =
    props.item.month === "May" &&
    MayDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData6 =
    props.item.month === "June" &&
    JuneDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData7 =
    props.item.month === "July" &&
    JulyDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData8 =
    props.item.month === "August" &&
    AugustDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData9 =
    props.item.month === "September" &&
    SeptemberyDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData10 =
    props.item.month === "October" &&
    OctoberDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData11 =
    props.item.month === "November" &&
    NovemberDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));

  const tableData12 =
    props.item.month === "December" &&
    DecemberDays.map((day) => (
      <tr key={day.id}>
        <td
          onClick={() => handleClick(day.days[0])}
          className={
            props.day === day.days[0] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[0]}
        </td>
        <td
          onClick={() => handleClick(day.days[1])}
          className={
            props.day === day.days[1] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[1]}
        </td>
        <td
          onClick={() => handleClick(day.days[2])}
          className={
            props.day === day.days[2] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[2]}
        </td>
        <td
          onClick={() => handleClick(day.days[3])}
          className={
            props.day === day.days[3] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[3]}
        </td>
        <td
          onClick={() => handleClick(day.days[4])}
          className={
            props.day === day.days[4] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[4]}
        </td>
        <td
          onClick={() => handleClick(day.days[5])}
          className={
            props.day === day.days[5] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[5]}
        </td>
        <td
          onClick={() => handleClick(day.days[6])}
          className={
            props.day === day.days[6] && props.item.month === props.thisMonth
              ? "clickCustumCss"
              : null
          }
          tabIndex="-1"
        >
          {day.days[6]}
        </td>
      </tr>
    ));
  // Make tables Header
  const tableHeader = Weeks.map((week) => <th key={week.id}>{week.week}</th>);

  useEffect(() => {
    window.localStorage.setItem("dayHistory", dayHistory);
    window.localStorage.setItem("monthHistory", monthHistory);
  }, [dayHistory, monthHistory]);

  function handleClick(e) {
    setDayHistory(e);
    setMonthHistory(props.item.month);
  }

  return (
    <div>
      <h5 className="text-center">
        {props.item.month} {props.year}
      </h5>
      <table
        className={`table table-borderless mb-2 calender ${props.item.month}`}
      >
        <thead>
          <tr>{tableHeader}</tr>
        </thead>
        <tbody>
          {tableData1}
          {tableData2}
          {tableData3}
          {tableData4}
          {tableData5}
          {tableData6}
          {tableData7}
          {tableData8}
          {tableData9}
          {tableData10}
          {tableData11}
          {tableData12}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
