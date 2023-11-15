import { useLocation } from "react-router-dom";
import DateConverter from "./DateConverter";

function ConfirmedBooking() {
  const location = useLocation();

  return (
    <section className="confirmationSection">
      <h1>Booking Confirmed!</h1>
      <h3>Details as follows:</h3>
      <table class="styled-table">
        <tbody>
          <tr>
            <td>Date:</td>
            <td>{DateConverter(location.state.date)}</td>
          </tr>
          <tr>
            <td>Time:</td>
            <td>{location.state.time}</td>
          </tr>
          <tr>
            <td>Number of guests:</td>
            <td>{location.state.guestNr}</td>
          </tr>
          <tr>
            <td>Occasion:</td>
            <td>{location.state.occasion}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ConfirmedBooking;
