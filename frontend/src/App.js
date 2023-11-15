import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import BookingPage from "./components/BookingPage";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { useReducer } from "react";
import { fetchAPI } from "./components/FakeApi";
import ConfirmedBooking from "./components/ConfirmedBooking";

const timeReducer = (state, action) => {
  if (action.type === "DATE_INPUT") {
    console.log(fetchAPI(new Date(action.val)));
    return { value: fetchAPI(new Date(action.val)) };
  }
  return {
    value: state.val,
  };
};

function App() {
  const navigate = useNavigate();
  const [availableTimes, dispatchAvailableTimes] = useReducer(timeReducer, {
    value: null,
    // fetchAPI(new Date()),
  });

  const handleDateChange = (e) => {
    dispatchAvailableTimes({ type: "DATE_INPUT", val: e });
  };

  const submitForm = (formData) => {
    // if (
    //   formData.time.value === "Select time" ||
    //   !formData.guestNr.value ||
    //   formData.occasion.value === "Select occasion"
    // ) {
    //   console.log("An error has occured");
    //   return;
    // } else {
    console.log("booking has gone through");
    console.log(formData.date.value);
    console.log(formData.time.value);
    navigate("/confirmation", {
      state: {
        time: formData.time.value,
        guestNr: formData.guestNr.value,
        occasion: formData.occasion.value,
        date: formData.date.value,
      },
    });
    // }
  };

  // Upon receiving the date with the fetch api above,
  // update the responsible components state with it.
  // Loop over the data received and saved to that components
  // state or loop over the data received and passed from that
  // component to its child component or components.

  return (
    <body className="App">
      {/* This was needed in the mern stack app */}
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/specials" element={<Hero />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes.value}
              onDateChange={handleDateChange}
              onSubmit={submitForm}
            />
          }
        />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* </BrowserRouter> */}
      <Footer />
    </body>
  );
}

export default App;
