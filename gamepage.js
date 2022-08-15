// random value generated
var y = Math.floor(Math.random() * 20 + 1);
var guess = 1;
player_name=localStorage.getItem("player_name");
function submit(){
    var x = document.getElementById("guessField").value ;
    if (x == y){
        alert("CONGRADULATIONS!!!!!!" + player_name + " YOU GUESSED IT RIGHT IN " + guess + " GUESS");
        guess= 1;
    }
    else if(x > y){
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
    if (guess >= 10){
        window.location="over.html";
    }
}
function playAgain(){
    y = Math.floor(Math.random() * 20 + 1);
}
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     
