import BookingForm from "./BookingForm";
import { useState } from "react";
import React from "react";

function BookingPage(props) {
  const [bookingTime, setBookingTime] = useState();
  const handleTimeChange = (e) => {
    setBookingTime(e);
    console.log(e);
  };

  const handleDateChange = (e) => {
    props.onDateChange(e);
  };

  return (
    <span className="ReservationPage">
      <h1>Reserve a table</h1>
      <h2>Time of Booking: {bookingTime}</h2>
      <h2>Available times are as follows:</h2>
      <p>
        {props.availableTimes &&
          props.availableTimes
            .filter((item) => item !== bookingTime)
            .map((time) => <span>{time} </span>)}
      </p>
      <BookingForm
        availableTimes={props.availableTimes}
        onTimeChange={handleTimeChange}
        onDateChange={handleDateChange}
      />
    </span>
  );
}

export default BookingPage;
