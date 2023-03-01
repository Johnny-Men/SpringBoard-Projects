const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);


// function startGame(){
// const startBtn = document.createElement("button");

// startBtn.classList.add("start");

// document.querySelector("#game").prepend(startBtn);

// startBtn.innerText = "New Game";

// startBtn.addEventListener("click",()=> createDivsForColors(shuffledColors));

// }


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");


    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }

   
}
const tracker = document.querySelector("h2");
let score = document.createElement("span");
tracker.append(score);
score.innerText = 0;
let count = 0;
let firstCard = " ";
let secondCard = " ";
// TODO: Implement this function!
function handleCardClick(event){
    const currentColor = event.target;
    if(count === 0 && !currentColor.classList.contains("flipped")){
        event.target.classList.add("flipped");
        count ++;
        firstCard = event.target;
        firstCard.style.backgroundColor = firstCard.classList[0];
        score.innerText ++;
    }
    else if (count === 1 && !event.target.classList.contains("flipped")){
        event.target.classList.add("flipped");
        secondCard = event.target;
        secondCard.style.backgroundColor = secondCard.classList[0];
        count ++;
        score.innerText ++;
    }
    
   if (secondCard !== " " && firstCard.classList[0] === secondCard.classList[0]){
    setTimeout(function(){
      firstCard.classList.add("match");
      secondCard.classList.add("match");
      count = 0;
      secondCard = " ";
      firstCard = " ";
    }, 1000)
    }
  
    else if (!event.target.classList.contains("match") && secondCard !== " "){
    setTimeout(function(){
        secondCard.style.backgroundColor = "white";
        secondCard.classList.remove("flipped");
        firstCard.style.backgroundColor = "white";
        firstCard.classList.remove("flipped");
        count = 0;
        secondCard = " ";
    }, 1000)
  }
}





// let reset = gameContainer.children;

// function newGame(reset){
//   for(let i = 0; i < reset.length; i++){
//     reset[i].classList.remove("match");
//   }
//   return reset;
// }


// currentColor = event.target.classList;
// if(count === 0){
//     currentColor = nextColor;
//     event.target.style.backgroundColor = event.target.classList;
//     count ++;
// }

// if(currentColor === nextColor && count === 1){
//     event.target.style.backgroundColor = currentColor;
//     count = 0;
//     currentColor = " ";
//     nextColor = " ";
// }

// else if (currentColor !== nextColor){
//     event.target.style.backgroundColor = currentColor;
//     setTimeout(function(){
//         event.target.style.backgroundColor = "white";
//         document.querySelectorAll(currentColor).style.backgroundColor = "white";
//     }, 1000)
//     count = 0;
//     nextColor = " ";
//     currentColor = " ";
// }
    


    // if(count === 0 && match === undefined){
    //     event.target.style.backgroundColor = event.target.classList;
    //     count ++;
    //     match = event.target.classList;
    //     setTimeout(function(){
    //         event.target.style.backgroundColor = "white";
    //     }, 1000)
    // }
    //   if (event.target.classList === match && count === 1){
    //     event.target.style.backgroundColor = event.target.classList;
    //     count = 0;
    // }
   
    // if (event.target.classList !== match){
    //     event.target.style.backgroundColor = event.target.classList;
    //     setTimeout(function(){
    //         event.target.style.backgroundColor = "white";
    //     }, 1000);
    //     count = 0;
    // }
        

  // you can use event.target to see which element was clicked
  


// const timer = setTimeout(handleCardClick, 1000);

// function stopTimer(){
//     clearTimeout(stopTimer);
// }
// when the DOM loads
createDivsForColors(shuffledColors);
// startGame();
