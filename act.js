const currentTime = () => {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var periods = document.getElementById("periods");
  if (hrs >= 12) {
    periods.innerHTML = "PM";
  } else {
    periods.innerHTML = "AM";
  }
  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("munites").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
};
setInterval(currentTime, 10);
