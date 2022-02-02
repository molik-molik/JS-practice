var year = new Year();
document.getElementById("year").innerHTML = year;

var day = new Day();
document.getElementById("day").innerHTML = day;

var date = new Date();
document.getElementById("date").innerHTML = date;

var month = new Month();
document.getElementById("month").innerHTML = month;

var hours = new Hours();
document.getElementById("hours").innerHTML = hours;

var minutes = new Minutes();
document.getElementById("minutes").inner = minutes;

var seconds = new Seconds();
document.getElementById("seconds").innerHTML = seconds;

myFunction = function() {
    var first = document.getElementById("firstname").value;
    var second = document.getElementById("lastname").value;

    document.getElementById("here").innerHTML = first+" "+second;
}
