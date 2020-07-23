var location1 = 3;
var location2 = 4;
var location3 = 5;
var quess;
var hits = 0;
var quesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Input");
    if (guess < 0 || guess > 6) {
        alert ("Input correctly, please");
    } else {
        quesses = quesses + 1;
        
        if (guess == location1 || guess == location2 || guess == location3 ) {
            alert("hit!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Ship is over");
            }
        } else {
            alert ("Miss");
        }
    }
}
var stats = "you took " + quesses + " tryes";
alert (stats);







