import BookingForm from "./BookingForm";
import { useState } from "react";
import React from "react";

function BookingPage(props) {
  const [bookingTime, setBookingTime] = useState();
  const [todaysTime, setTodaysTime] = useState("today");
  const handleTimeChange = (e) => {
    setBookingTime(e);
    console.log(e);
  };

  const handleSubmit = (e) => {
    props.onSubmit(e);
  };

  const dateConverter = (e) => {
    let day = e.slice(8, 10);
    let monthNr = e.slice(5, 7);
    let year = e.slice(0, 4);
    let month = "";
    if (monthNr === "01") {
      month = "January";
    }
    if (monthNr === "02") {
      month = "February";
    }
    if (monthNr === "03") {
      month = "March";
    }
    if (monthNr === "04") {
      month = "April";
    }
    if (monthNr === "05") {
      month = "May";
    }
    if (monthNr === "06") {
      month = "June";
    }
    if (monthNr === "07") {
      month = "July";
    }
    if (monthNr === "08") {
      month = "August";
    }
    if (monthNr === "09") {
      month = "September";
    }
    if (monthNr === "10") {
      month = "October";
    }
    if (monthNr === "11") {
      month = "November";
    }
    if (monthNr === "12") {
      month = "December";
    }
    return `${month} ${day}, ${year}`;
  };

  const handleDateChange = (e) => {
    props.onDateChange(e);
    const checkTime = (e) => {
      console.log(e);
      if (e === new Date().toISOString().slice(0, 10)) {
        return "today";
      } else {
        return dateConverter(e);
      }
    };
    setTodaysTime(checkTime(e));
  };

  return (
    <span className="ReservationPage">
      <h1>Reserve a table</h1>
      <h2 hidden={!bookingTime || bookingTime === "Select time"}>
        Time of Booking: {bookingTime}
      </h2>
      {props.availableTimes && (
        <h2>Available times for {todaysTime} are as follows:</h2>
      )}
      <ul>
        {props.availableTimes &&
          props.availableTimes
            .filter((item) => item !== bookingTime)
            .map((time) => <li style={{ display: "inline" }}>{time} </li>)}
      </ul>
      <BookingForm
        availableTimes={props.availableTimes}
        onTimeChange={handleTimeChange}
        onDateChange={handleDateChange}
        onSubmit={handleSubmit}
      />
    </span>
  );
}

export default BookingPage;
