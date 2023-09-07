// current day of the week

function updateWeekDay() {
    const currentDayOfTheWeek = new Date();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const dayOfWeek = daysOfWeek[currentDayOfTheWeek.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = dayOfWeek;

}
updateWeekDay();


// current utc time

function UTCTimeUpdate() {
    const currentTime = new Date().toUTCString();
       const currentUTCTime = currentTime.replace("GMT", "UTC"); 
       document.getElementById("currentUTCTime").innerHTML = currentUTCTime;
  
}

setInterval(UTCTimeUpdate, 1000);
UTCTimeUpdate();


document.getElementById("slackUserName").style.paddingTop = "10px";
document.getElementById("currentDayOfTheWeek").style.paddingTop = "10px";
document.getElementById("currentUTCTime").style.paddingTop = "10px";
document.getElementById("myTrack").style.paddingTop = "10px";
document.getElementById("githubURL").style.paddingTop = "10px";
document.getElementById("githubURL").style.color = "red";

