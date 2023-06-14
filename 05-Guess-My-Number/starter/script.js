'use strict';
// console.log(document.querySelector('.message').textContent) 

// document.querySelector(".message").textContent = "correct Number"

// console.log(document.querySelector('.message').textContent) 


// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;


 
// document.querySelector('.guess').value = 23

// console.log(document.querySelector('.guess').value)

let number = Math.trunc(Math.random()*20)+1
let score = 20
let highScore = 0; 

function displayMessage (message){
document.querySelector('.message').textContent = message
}

document.querySelector(".check").addEventListener("click",function(e){
   const guess =Number (document.querySelector('.guess').value)
   

   if(!guess){
     displayMessage("No Number")
   
    //when guess is correct 
    }else if(guess === number){
        if(score > highScore){
            highScore = score
            document.querySelector(".highscore").textContent = highScore
        }
    
        displayMessage("Correct Number")
    document.querySelector(".number").textContent = number
    document.querySelector('body').style.backgroundColor = "green";
    document.querySelector('.number').style.width = "30rem"
   //when guess is too high
// }else if(guess > number){
//     if(score > 1){
//         document.querySelector(".message").textContent = "Too High"
//         score--;
//         document.querySelector(".score").textContent = score;
//     }else{
//         document.querySelector(".message").textContent = "You lost the game...!"
//         document.querySelector(".score").textContent = 0;
//     }
//     //when guess is too low
//    }else if(guess < number){

//     if(score > 1){
//         document.querySelector(".message").textContent = "Too low"
//         score--;
//         document.querySelector(".score").textContent = score;
//     }else{
//         document.querySelector(".message").textContent = "You lost the game...!"
//         document.querySelector(".score").textContent = 0;
//     }
   }else if(guess !== number){
    if(score > 1){
     document.querySelector(".message").textContent = guess > number ? "Too High" :"Too Low"
     score--;
     document.querySelector(".score").textContent = score;
 }else{
     displayMessage("You Lost the Game...!")
     document.querySelector(".score").textContent = 0;
 }
   }
})

document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    number = Math.trunc(Math.random()*20)+1
    document.querySelector(".score").textContent = 0;
    displayMessage("Start guessing...")
    document.querySelector('.guess').value =""
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem"
    document.querySelector('.number').textContent = "?"

})
