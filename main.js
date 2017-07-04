function showDate() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = month_names[month];
  var year = today.getFullYear();
  document.getElementById('date').innerHTML = day + " " + month + " " + year;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showTime() {
    var now = new Date();
    var hour = now.getHours();
    if (hour >= 13) {
     hour = hour-12;
    }
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // add a zero in front of numbers<10
    hour = addZero(hour);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    document.getElementById('time').innerHTML = hour + ":" + minutes + ":" + seconds;
    t = setTimeout(function () {
        showTime()
    }, 500);
}
showDate();
showTime();
