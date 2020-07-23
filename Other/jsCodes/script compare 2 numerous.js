var a;
var b;
var c;
var d;
function inputdata(){
    a = prompt("input a");
    b = prompt("input b");
}
inputdata();
function big(){
    if (a>b){
        alert(a);
    } else if (a==b){
        alert("They are equall");
    } else{
        alert(b);
    }
}
function  small(){
    if (a<b){
        alert(a);
    } else if (a=b){
        alert("They are equall");
    } else {
        alert(b);
    }
}
function choise(){
   c = prompt("Big or small? Type 1 or 2"); 
   while (c > 3){
       alert("input corretcly, please");
       c = prompt("Big or small? Type 1 or 2"); 
   } 
   if ( c == 1){
       big();
   } else {
       small();
   }
}
choise();
function again(){
    d = prompt("Again? y/n");
    while (d == "y") {
        inputdata();
        choise();
        d = prompt("Again? y/n");
    }
}
again();

/* Программа предлагает ввести 2 числа, затем предлагает вывести
наименьшее или наибольшее число. После этого снова предлагает снова пройти через эту процедуру. Если пользователь ввел одиноко
вые числа, выводиться сообщение о том, что эти 2 числа равны. */