/*----- constants -----*/
const COLORS = {
    player1 = 'x'
    player2 = 'o'
}
let TURN = true
//
const WINCOMB = {
    possCom1: [0,1,2],
    possCom2: [0,4,8],
    possCom3: [0,3,6],
    possCom4: [1,4,7],
    possCom5: [2,5,8],
    possCom6: [3,4,5],
    possCom7: [6,7,8],
    possCom8: [2,4,6]
}

/*----- app's state (variables) -----*/
let square0;
let square1;
let square2;
let square3;
let square4;
let square5;
let square6;
let square7;
let square8;


/*----- cached element references -----*/
let square0 = document.getElementById('square0')
let square1 = document.getElementById('square1')
let square2 = document.getElementById('square2')
let square3 = document.getElementById('square3')
let square4 = document.getElementById('square4')
let square5 = document.getElementById('square5')
let square6 = document.getElementById('square6')
let square7 = document.getElementById('square7')
let square8 = document.getElementById('square8')


/*----- event listeners -----*/
document.querySelector(".gameSquare").addEventListener('click', play);



/*----- functions -----*/
function play () {

}

function switch () {

}
function replay() {

}

//create turns for each player