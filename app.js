function watch() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "PM";
  // console.log(`${hours} : ${minutes} ${seconds}`);

  if (hours >= 12) {
    hours = hours - 12;
    session = "AM";
  }
  if (hours == 0) {
    hours = 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[date.getDay()];
  //console.log(weekday);

  const months = [
    "January",
    " February",
    " March",
    " April",
    " May",
    " June",
    " July",
    " August",
    " Sep",
    " Out",
    " Nov",
    " December",
  ];
  let month = months[date.getMonth()]; // +1 se counting 0 se start nhi hogi
  let day = date.getDate();
  let year = date.getFullYear();
  //let todayDate = `${month} ${day}, ${year}`;
  //console.log(todayDate);

  document.getElementById(
    "timeprint"
  ).innerHTML = `${hours}: ${minutes}: ${seconds} ${session}`;
  document.getElementById(
    "dayprint"
  ).innerHTML = `${weekday}, ${month} ${day}, ${year}`;
}
setInterval(watch, 1000);
