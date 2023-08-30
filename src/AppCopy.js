import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import BookingPage from "./components/BookingPage";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { fetchAPI } from "./components/FakeApi";

const timeReducer = (state, action) => {
  if (action.type === "DATE_INPUT") {
    console.log(action.val);
    return { value: action.val };
  }
  return {
    value: state.val,
  };
};

function App() {
  // let myDate;
  // const [users, setUsers] = useState([]);
  // const bookings = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  // const initializeTimes = () => {
  //   return { value: bookings, date: "" };
  // };
  // const [availableTimes, setAvailableTimes] = useState(bookings);
  const [availableTimes, dispatchAvailableTimes] = useReducer(timeReducer, {
    value: [],
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Checking Form Validity");
  //     setFormIsValid(emailState.isValid && passwordState.isValid);
  //   }, 500);
  //   return () => {
  //     console.log("Cleanup");
  //     clearTimeout(identifier);
  //   };
  // }, [availableTimes]);

  const handleDateChange = (e) => {
    dispatchAvailableTimes({ type: "DATE_INPUT", val: fetchAPI(new Date(e)) });
    console.log(e);
    console.log(fetchAPI(new Date(e)));
  };
  // const fetchUserData = () => {
  //   fetchAPI(myDate)
  //     // (
  //     //   "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
  //     // )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //     });
  //   console.log(users[1]);
  // };

  // useEffect(() => {
  //   fetchUserData();
  //   console.log(users);
  // }, [myDate]);

  // Upon receiving the date with the fetch api above,
  // update the responsible components state with it.
  // Loop over the data received and saved to that components
  // state or loop over the data received and passed from that
  // component to its child component or components.

  return (
    <body className="App">
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
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </body>
  );
}

export default App;
