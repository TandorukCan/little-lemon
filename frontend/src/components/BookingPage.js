import BookingForm from "./BookingForm";
import DateConverter from "./DateConverter";
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

  const handleDateChange = (e) => {
    props.onDateChange(e);
    const checkTime = (e) => {
      console.log(e);
      if (e === new Date().toISOString().slice(0, 10)) {
        return "today";
      } else {
        return DateConverter(e);
      }
    };
    setTodaysTime(checkTime(e));
  };

  return (
    <span className="ReservationPage">
      <h1>Reserve a table</h1>
      {props.availableTimes && (
        <h2>Available times for {todaysTime} are as follows:</h2>
      )}
      <div class="box">
        {props.availableTimes &&
          props.availableTimes.map((time) => (
            <div className={time === bookingTime ? "activeBox" : ""}>
              {time}
            </div>
          ))}
      </div>
      {/* <h2 hidden={!bookingTime || bookingTime === "Select time"}>
        Time of Booking: {bookingTime}
      </h2> */}
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
