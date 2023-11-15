import React from "react";
import { useState } from "react";

function BookingForm(props) {
  // var curr = new Date().toISOString().slice(0, 10);

  // const formik = useFormik({
  //   initialValues: {
  //     date: curr,
  //     guestNr: "",
  //     occasion: "",
  //     time: "",
  //   },
  //   onSubmit: (values) => {
  //     handleSubmit(values);
  //   },
  //   validationSchema: Yup.object({
  //     date: Yup.date().required("Required"),
  //     guestNr: Yup.number()
  //       .min(1, "At least 1 person must attend")
  //       .max(10, "Maximum of 10 people can attend ")
  //       .required("Required"),
  //     occasion: Yup.string().required("Required"),
  //     time: Yup.string().required("Required"),
  //   }),
  // });

  const initialState = {
    date: "",
    guestNr: "",
    occasion: "",
    time: "",
  };

  const initialNegativeState = {
    date: false,
    guestNr: false,
    occasion: false,
    time: false,
  };

  const [inputIsValid, setInputIsValid] = useState(initialNegativeState);
  const [inputTouched, setInputTouched] = useState(initialNegativeState);
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "time") {
      if (e.target.value !== "" && e.target.value !== "Select time") {
        setInputIsValid((prevState) => ({
          ...prevState,
          time: true,
        }));
      }
      props.onTimeChange(e.target.value);
    }

    if (e.target.name === "date") {
      if (e.target.value !== "") {
        setInputIsValid((prevState) => ({
          ...prevState,
          date: true,
        }));
        props.onDateChange(e.target.value);
      }
    }

    if (e.target.name === "occasion") {
      if (e.target.value !== "" && e.target.value !== "Select occasion") {
        setInputIsValid((prevState) => ({
          ...prevState,
          occasion: true,
        }));
        // console.log("occasion change is reached");
        // return;
      }
    }
    if (e.target.name === "guestNr") {
      if (e.target.value > 0 && e.target.value < 11) {
        setInputIsValid((prevState) => ({
          ...prevState,
          guestNr: true,
        }));
      }
    }
  };

  const handleBlur = (e) => {
    setInputTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
    if (e.target.name === "time") {
      if (inputs.time === "" || inputs.time === "Select time") {
        setInputIsValid((prevState) => ({
          ...prevState,
          [e.target.name]: false,
        }));
      }
    }
    if (e.target.name === "date") {
      if (inputs.date === "") {
        setInputIsValid((prevState) => ({
          ...prevState,
          [e.target.name]: false,
        }));
      }
    }
    if (e.target.name === "guestNr") {
      if (inputs.guestNr < 1 || inputs.guestNr > 10) {
        setInputIsValid((prevState) => ({
          ...prevState,
          [e.target.name]: false,
        }));
      }
    }
    if (e.target.name === "occasion") {
      if (inputs.occasion === "" || inputs.occasion === "Select occasion") {
        setInputIsValid((prevState) => ({
          ...prevState,
          [e.target.name]: false,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputTouched({
      date: true,
      guestNr: true,
      occasion: true,
      time: true,
    });

    if (
      inputs.date === "" ||
      inputs.occasion === "" ||
      inputs.occasion === "Select occasion" ||
      inputs.guestNr < 1 ||
      inputs.guestNr > 10 ||
      inputs.time === "Select time" ||
      inputs.time === ""
    ) {
      if (inputs.date === "") {
        setInputIsValid((prevState) => ({
          ...prevState,
          date: false,
        }));
        // setInputTouched((prevState) => ({
        //   ...prevState,
        //   date: true,
        // }));
      }
      if (inputs.occasion === "" || inputs.occasion === "Select occasion") {
        setInputIsValid((prevState) => ({
          ...prevState,
          occasion: false,
        }));
        // setInputTouched((prevState) => ({
        //   ...prevState,
        //   occasion: true,
        // }));
      }
      if (inputs.time === "" || inputs.time === "Select time") {
        setInputIsValid((prevState) => ({
          ...prevState,
          time: false,
        }));
        // setInputTouched((prevState) => ({
        //   ...prevState,
        //   time: true,
        // }));
      }
      if (inputs.guestNr < 1 || inputs.guestNr > 10) {
        setInputIsValid((prevState) => ({
          ...prevState,
          guestNr: false,
        }));
        // setInputTouched((prevState) => ({
        //   ...prevState,
        //   guestNr: true,
        // }));
      }

      return;
    }
    setInputIsValid({
      date: true,
      guestNr: true,
      occasion: true,
      time: true,
    });

    props.onSubmit(e.target);
    // setInputs({ ...initialState });
    // e.target.reset();

    // useEffect(() => {}, []);
  };

  const timeInputIsInvalid = !inputIsValid.time && inputTouched.time;
  const timeInputClass = timeInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const dateInputIsInvalid = !inputIsValid.date && inputTouched.date;
  const dateInputClass = dateInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const occasionInputIsInvalid =
    !inputIsValid.occasion && inputTouched.occasion;
  const occasionInputClass = occasionInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const guestNrInputIsInvalid = !inputIsValid.guestNr && inputTouched.guestNr;
  const guestNrInputClass = guestNrInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("Checking Form Validity");
  //     setFormIsValid(
  //       inputIsValid.time &&
  //         inputIsValid.date &&
  //         inputIsValid.occasion &&
  //         inputIsValid.guestNr
  //     );
  //   }, 500);
  //   return () => {
  //     console.log("Cleanup");
  //     clearTimeout(identifier);
  //   };
  // }, [inputIsValid]);

  return (
    <form
      onSubmit={
        // formik.
        handleSubmit
      }
      className="Form"
    >
      <span className={dateInputClass}>
        <input
          name="date"
          type="date"
          id="res-date"
          value={inputs.date}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-labelledby="date"
        />
        <label id="date" htmlFor="res-date">
          Choose date:
        </label>
      </span>
      {dateInputIsInvalid && <p className="error-text">Please choose a date</p>}
      <span className={timeInputClass}>
        <select
          value={inputs.time}
          name="time"
          id="time"
          // defaultValue={"2023-08-31"}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-labelledby="reservation-time"
        >
          <option>Select time</option>
          {props.availableTimes &&
            props.availableTimes.map((time) => <option>{time}</option>)}
        </select>
        <label id="reservation-time" htmlFor="time">
          Choose time:
        </label>
      </span>
      {timeInputIsInvalid && (
        <p className="error-text">
          Please choose a time, if you have already picked the date
        </p>
      )}
      <span className={guestNrInputClass}>
        <input
          type="number"
          name="guestNr"
          placeholder="0"
          id="guests"
          value={inputs.guestNr}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-labelledby="number-of-guests"
          // {...formik.getFieldProps("guestNr")}
        />
        <label id="number-of-guests" htmlFor="guests">
          Number of guests:
        </label>
      </span>
      <p
        className="error-text"
        style={
          guestNrInputIsInvalid ? { display: "block" } : { display: "none" }
        }
      >
        Number of people attending must be between 1 and 10
      </p>
      <span className={occasionInputClass}>
        <select
          name="occasion"
          value={inputs.occasion}
          id="occasion"
          onChange={handleChange}
          onBlur={handleBlur}
          aria-labelledby="res-occasion"
          // {...formik.getFieldProps("occasion")}
        >
          <option>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <label id="res-occasion" htmlFor="occasion">
          Occasion:
        </label>
      </span>
      <p
        style={
          occasionInputIsInvalid ? { display: "block" } : { display: "none" }
        }
        className="error-text"
      >
        Please choose an occasion
      </p>
      <button
        disabled={
          !(inputs.date && inputs.guestNr && inputs.time && inputs.occasion)
        }
        name="submit"
        id="FormButton"
        type="submit"
        aria-label="submit"
      >
        Enter your details
      </button>
    </form>
  );
}
export default BookingForm;
