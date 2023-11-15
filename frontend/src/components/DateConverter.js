const DateConverter = (e) => {
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

export default DateConverter;
