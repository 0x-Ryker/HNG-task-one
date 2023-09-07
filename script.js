// current day of the week
const currentDate = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const dayOfWeek = daysOfWeek[currentDate.getDay()];

document.getElementById("day-of-week").innerHTML = dayOfWeek;

