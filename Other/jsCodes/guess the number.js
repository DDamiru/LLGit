function prog(){
    var x;
    var a;
    var l = false;
    var n = 0;
    x = Math.floor(Math.random() * 101);
    function inputdata(){
        a = prompt("Input data from 1 to 100");
    }
    inputdata ();
    while (a > 100) {
        alert("inptut data correctly! (1-100)");
        inputdata();
    }
    function condishons(){
        while (l == false){
            if (x > a) {
                alert("more");
                n = ++n;
                inputdata();
            } 
            else if (x == a ){
                l = true;
                alert("You won! " + "Tries: " + n);
            } else {
                alert("less");
                n = ++n;
                inputdata();
            } 
        }  
    }
    condishons();
}
prog();
function again(){
    var y;
    y = prompt("Again? y/n");
    if (y == "y"){
        prog();
        again();
    } 
}
again();


