// current day of the week

function updateWeekDay() {
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

}
updateWeekDay();

// current utc time

function UTCTimeUpdate() {
    const currentTime = new Date().toUTCString();
       const currentTimeUTC = currentTime.replace("GMT", "UTC"); 
       document.getElementById("time").innerHTML = currentTimeUTC;
  
}

setInterval(UTCTimeUpdate, 1000);
UTCTimeUpdate();


