/*----- constants -----*/

const MAXGUESS = 9;
//
const WINCOMB = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [2, 4, 6],
];

/*----- app's state (variables) -----*/
//this should either be 'x' or 'o'
let playerChoice; // player 1 = 1 and player 2 = -1
let turn;
let squareColor;
/*----- cached element references -----*/
let squareEl = document.querySelector(".gameBoard");
let allSquares = document.querySelectorAll(".gameSquare");
/*----- event listeners -----*/
document.querySelector(".gameBoard").addEventListener("click", handleClick);
document.querySelector("#reset").addEventListener("click", init);

/*----- functions -----*/

// when clicked, invoke render. check to see if there is a winner.
// if not see if it reaches max guess. or add 1 to turn to switch player turn
function handleClick(evt) {
  let index = evt.target.id;
  if (playerChoice[index] || checkWinner()) return;
  playerChoice[index] = turn % 2 ? "O" : "X";

  render(evt.target);

  if (checkWinner()) {
    squareEl.removeEventListener("click", handleClick);
    renderMessage();
  } else if (turn + 1 === MAXGUESS) {
    squareEl.removeEventListener("click", handleClick);
    document.getElementById("msg").textContent = `Nobody wins!`;
    // }
  }
  turn += 1;
}

function init() {
  // initialize all state variables
  playerChoice = [null, null, null, null, null, null, null, null, null];
  //restart game, (remove msg, remove x and o, add event listener back)
  document.getElementById("msg").textContent = null;
  turn = 0;
  document.querySelectorAll(".gameSquare").forEach(function (element) {
    element.textContent = "";
  })
    document.querySelectorAll(".gameSquare").forEach(function (element) {
      element.style.backgroundColor = "#3399FF";
  });
  document.querySelector(".gameBoard").addEventListener("click", handleClick);
}

init();

//check if playerchoice array matches possible winning combo
function checkWinner() {
  return WINCOMB.some(function (arr) {
    return (
      playerChoice[arr[0]] === playerChoice[arr[1]] &&
      playerChoice[arr[0]] === playerChoice[arr[2]] &&
      playerChoice[arr[0]]
    );
  });
}

//adds the character X or O

function render(element) {
  element.textContent = turn % 2 ? "O" : "X";
  element.style.backgroundColor =
    element.textContent === "X" ? "yellow" : "pink";
}

// display when X or O wins
function renderMessage() {
  document.getElementById("msg").textContent = `Player ${
    turn % 2 ? "O" : "X"
  } wins!`;
}
