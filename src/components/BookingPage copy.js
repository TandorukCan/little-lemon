import BookingForm from "./BookingForm";
// import AvailableTimes from "./availableTimes";
import { useState, useEffect } from "react";
import React from "react";

function BookingPage(props) {
  const [bookingTime, setBookingTime] = useState();
  // const [filteredList, setFilteredList] = useState(props.availableTimes);

  // bookings.map((booking) => filteredList.push(booking));

  const handleTimeChange = (e) => {
    setBookingTime(e);
    // setFilteredList(
    //   props.availableTimes.filter((item) => item !== bookingTime)
    // );
    // console.log(filteredList);
    console.log(e);
  };

  const handleDateChange = (e) => {
    props.onDateChange(e);
  };

  // const handleListChange = (e) => {
  //   let bookings = e;
  //   console.log(bookings);
  // };

  // useEffect(() => {
  //   console.log(filteredList);
  // }, [filteredList]);

  return (
    <span className="ReservationPage">
      <h1>Reserve a table</h1>
      {/* <AvailableTimes
        updateList={filteredList}
        onListChange={handleListChange}
      /> */}
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
