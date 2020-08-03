var today = new Date();
var hourNow = today.getHours();
var greeting;
if(hourNow > 18) {
    greeting = "Good morning!";
} else if (hourNow > 12) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
document.write("<h3>" + greeting + "</h3>")