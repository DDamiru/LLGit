var player1 = prompt("Player 1, input your name!");
var player2 = prompt("Player 2, input your name!");
var pl1 = firstcubs();
var pl2 = firstcubs();
var gameOver = false;
var scopeP1 = 0;
var scopeP2 = 0;
   alert("Who goes first? Let's find out with cubs");
   alert(player1 + " is playing with cubs " + "It's: " + pl1);
   alert(player2 + " is playing with cubs " + "It's: " + pl2);
   function firstcubs(){
      var cub = Math.floor(Math.random()* 7);
      if (cub == 0){
         cub++;
      }
   return cub;
   }

   while(pl1 == pl2){
      var pl1 = firstcubs();
      var pl2 = firstcubs();
      alert("Who goes first? Let's find out with cubs");
      alert(player1 + " is playing with cubs " + "It's: " + pl1);
      alert(player2 + " is playing with cubs " + "It's: " + pl2);
   }
   if (pl1 > pl2){
      v1();
   }else  if (pl1 < pl2){
      v2();
   }


   function cubs1(){
      alert(player1 + " is playing with cubs! ");
      var cub = Math.floor(Math.random()* 13);
      if (cub == 0){
         cub++;
      }
      scopeP1 = scopeP1 + cub;
      alert("The cub shows: " + cub + ". " + player1 +"'s" + " scope is " + scopeP1);
      if  (scopeP1 >= 100){
         gameOver = true;
         alert(player1 + " is won ")
      }
   }
   function cubs2(){
      alert(player2 + " is playing with cubs! ");
      var cub = Math.floor(Math.random()* 13);
      if (cub == 0){
         cub++;
      }
      scopeP2 = scopeP2 + cub;
      alert("The cub shows: " + cub + ". " + player2 +"'s" + " scope is " + scopeP2);
      if  (scopeP2 >= 100){
         gameOver = true;
         alert(player2 + " is won ")
      }
   }

   function v1(){
      while (gameOver == false){
         cubs1();
         cubs2();
      }
   }
   
   function v2(){
      while (gameOver == false){
         cubs2();
         cubs1();
      }
   }
   
 