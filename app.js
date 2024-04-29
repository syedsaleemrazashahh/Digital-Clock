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

// toLocaleDateString(); is function se asani se date nikal jati hai
// toLocaleTimeString(); is function se time nikal jata hai AM PM ky sath

// function tech() {
//   let date = new Date();
//   let shorty = date.toDateString();
//   let hour = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let session = "AM"

//   if (hour > 12) {
//     hour = hour - 12;
//     session = "PM"
//   }
//   /* if else first method */
//   if (hour < 10) {
//     hour = "0" + hour;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   /* ternory operator second method*/
//   // hour = hour < 10 ? "0" + hour : hour;
//   // minutes = minutes < 10 ? "0" + minutes : minutes;
//   // seconds = seconds < 10 ? "0" + seconds : seconds;

//   let time = `${hour}: ${minutes}: ${seconds} ${session}`;
//   document.getElementById("timeprint").innerHTML = time;

//   const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//   let day = weekdays[date.getDay()];

//   const months = [ "January",
//        " February",
//        " March",
//        " April",
//        " May",
//        " June",
//        " July",
//        " August",
//        " Sep",
//        " Out",
//        " Nov",
//        " December"];
//     let month = months[date.getMonth()];
//     let todayDate = date.getDate();
//     let year = date.getFullYear();
//   document.getElementById("dayprint").innerHTML = `${day}, ${month} ${todayDate}, ${year}`;
// }
// setInterval(tech, 1000)
