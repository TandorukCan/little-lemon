import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking Form Tests", () => {
  test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Enter your details");
    expect(headingElement).toBeInTheDocument();
  });
  test("button should be disabled for negative guestNr", () => {
    const { getByLabelText, getByRole } = render(<BookingForm />);
    const nrInput = getByLabelText(/Number of guests:/i);
    fireEvent.change(nrInput, { target: { value: -1 } });
    const btn = getByRole("button");
    expect(btn).toHaveAttribute("disabled");
  });
  test("button should be disabled for guestNr larger than 10", () => {
    const { getByLabelText, getByRole } = render(<BookingForm />);
    const nrInput = getByLabelText(/Number of guests:/i);
    fireEvent.change(nrInput, { target: { value: 10 } });
    const btn = getByRole("button");
    expect(btn).toHaveAttribute("disabled");
  });
  test("button should be disabled for empty occasion", () => {
    const { getByLabelText, getByRole } = render(<BookingForm />);
    const occasionInput = getByLabelText(/Occasion:/i);
    fireEvent.change(occasionInput, { target: { value: "Select occasion" } });
    const btn = getByRole("button");
    expect(btn).toHaveAttribute("disabled");
  });
  test("an error should not be thrown for a nr of people attending between 1 and 10", () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const nrInput = getByLabelText(/Number of guests:/i);
    fireEvent.change(nrInput, { target: { value: 1 } });
    const error = screen.getByText(
      "Number of people attending must be between 1 and 10",
      { hidden: true }
    );
    expect(error).toHaveStyle("display: none");
  });
  test("an error should be thrown for a nr of people attending having a negative value", () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const nrInput = getByLabelText(/Number of guests:/i);
    fireEvent.change(nrInput, { target: { value: -1 } });
    const error = screen.getByText(
      "Number of people attending must be between 1 and 10",
      { hidden: true }
    );
    expect(error).toBeInTheDocument();
  });
  test("an error should be thrown for a nr of people attending having a value greater than 10", () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const nrInput = getByLabelText(/Number of guests:/i);
    fireEvent.change(nrInput, { target: { value: 11 } });
    const error = getByText(
      "Number of people attending must be between 1 and 10"
      // { hidden: true }
    );
    expect(error).toBeInTheDocument();
  });
  test("error should be thrown for not choosing occasion", () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const occasionInput = getByLabelText(/Occasion:/i);
    fireEvent.change(occasionInput, { target: { value: "Select occasion" } });
    const error = getByText("Please choose an occasion", { hidden: true });
    expect(error).toBeInTheDocument();
  });
  test("error should not be thrown for choosing occasion", () => {
    const { getByLabelText, getByText } = render(<BookingForm />);
    const occasionInput = getByLabelText(/Occasion:/i);
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });
    const error = getByText("Please choose an occasion", { hidden: true });
    expect(error).toHaveStyle("display: none");
  });
});
