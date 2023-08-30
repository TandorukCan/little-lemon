import React from "react";
import { useState } from "react";

function BookingForm(props) {
  const [inputs, setInputs] = useState({});
  const initialState = {
    date: "",
    guestNr: "",
    occasion: "",
    time: "",
  };
  const handleChange = (e) => {
    if (e.target.name === "time") {
      props.onTimeChange(e.target.value);
    }
    if (e.target.name === "date") {
      props.onDateChange(e.target.value);
    }
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.occasion === "Select occasion" || inputs.time === "17:00") {
      alert("You have not picked the time or the occasion. Try again");
      return;
    }
    setInputs({ ...initialState });
    console.log("Form Submitted!");
  };
  return (
    <form onSubmit={handleSubmit} className="Form">
      <p>
        <label htmlFor="res-date">Choose date:</label>
        <input
          name="date"
          type="date"
          id="res-date"
          value={inputs.date}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="time">Choose time:</label>
        <select
          value={inputs.time}
          name="time"
          id="time"
          onChange={handleChange}
        >
          <option>Select time</option>
          {props.availableTimes &&
            props.availableTimes.map((time) => <option>{time}</option>)}
        </select>
      </p>
      <p>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          name="guestNr"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={inputs.guestNr}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="occasion">Occasion:</label>
        <select
          name="occasion"
          value={inputs.occasion}
          id="occasion"
          onChange={handleChange}
        >
          <option>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </p>
      <button
        disabled={
          !(inputs.date && inputs.guestNr && inputs.time && inputs.occasion)
        }
        id="FormButton"
        type="submit"
      >
        Enter your details
      </button>
    </form>
  );
}
export default BookingForm;
