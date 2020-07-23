var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc; // позиция корабля
var location2 = location1 + 1;
var location3 = location2 + 1;
var quess; // номер текущей попытки
var hits = 0; // количество попаданий
var quesses = 0; // количество попыток
var isSunk = false; // хранит инфу потоплен корабль или нет
while (isSunk == false) {
    quess = prompt("Ready, aim, fire! (enter a number from 0-6):")
    if (quess < 0 || quess > 6){
        alert("Please enter a valid cell number!");
    } else {
        quesses = quesses + 1;
        
        if (quess == location1 || quess == location2 || quess == location3 ){
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3){
                isSunk = true;
                alert("You sank my battleship");
            }
        } else{
            alert("MISS");
        }
    }
}
var stats = "You took " + quesses + " quesses to sink the battleship, " + "which means you shooting accuracy was " + (3/quesses);
alert(stats);