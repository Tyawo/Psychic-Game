

var computerChoices = ['a', 'b', 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' ,
 'k' , 'l' , 'm' , 'n', 'o', 'p', 'q' ,'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUsed = [];


var computerGuess;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var letterUsedText = document.getElementById("letterUsed-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var userGuessText = document.getElementById("userGuess");


document.onkeyup = function(event){

    if(guessesLeft === 9){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
        var userGuess = event.key;
        userGuess = userGuess.toLowerCase()

        if(userGuess === computerGuess){
            wins++;
            guessesLeft = 9;
            letterUsed =[];
                        
        }else{
            guessesLeft--;
            letterUsed.push(userGuess);
        }
        
        if(guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            letterUsed = [];
        }

    
    winsText.textContent = 'wins: ' + wins;
    lossesText.textContent = 'losses: ' + losses;
    guessesLeftText.textContent = 'guesses left ' + guessesLeft;
    letterUsedText.textContent = 'Your choice so far: ' + letterUsed.join("   ,    ");
    console.log(computerGuess);
     }













