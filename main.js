/*----- constants -----*/
const PLAYERONE = {
    sign: 'x',
}
const PLAYERTWO = {
    sign: 'o',
}
const MAXGUESS = 9;
//
const WINCOMB = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

/*----- app's state (variables) -----*/
//this should either be 'x' or 'o'
let playerChoice; // player 1 = 1 and player 2 = -1
let turn;

/*----- cached element references -----*/
let squareEl = document.querySelector('.gameBoard');



/*----- event listeners -----*/
document.querySelector(".gameBoard").addEventListener('click', handleClick);



/*----- functions -----*/
function handleClick(evt) {
    let index = evt.target.id
    playerChoice[index] = turn % 2 ? 'O' : 'X'
    render(evt.target);
    turn += 1;
    if(checkWinner()) {
        squareEl.removeEventListener('click', handleClick);
    }
}



function init() {
// initialize all state variables
playerChoice = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];
turn = 0;
}

init();

function checkWinner () {
    return WINCOMB.some(function(arr){
        return (
            playerChoice[arr[0]] === playerChoice[arr[1]] && 
            playerChoice[arr[0]] === playerChoice[arr[2]] && playerChoice[arr[0]]);
    })
}

//create turns for each player


function render(element) {
    element.textContent = turn % 2 ? 'O' : 'X';
}

function renderMessage() {
    
}