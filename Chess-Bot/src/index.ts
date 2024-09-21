import {funcs} from './funcs';
import {Chess} from 'chess.js';
import {bm} from './bm';
import PromptSync, * as promptSync from 'prompt-sync'; 

const prompt = PromptSync();

const b = new Chess();

const playerSide = prompt("User side: ");
const depth = parseInt(prompt("Depth: "));

if(playerSide == 'w' || playerSide == 'White' || playerSide == 'white' || playerSide == 'W') {
    console.log(b.ascii());
    var firstMove = prompt("First move: ");
    b.move(firstMove);
    console.log(b.ascii());
}

while(b.isGameOver() == false) {
    var dateOne = new Date();
    var computerBm = bm.findBest(b, depth);
    console.log(computerBm);
    b.move(computerBm);
    var dateTwo = new Date();
    console.log(funcs.timeDiff(dateOne, dateTwo) + " ms");
    console.log(b.ascii());

    var userMove = prompt("Your move: ");
    b.move(userMove);
    console.log(b.ascii());
}

if(b.isCheckmate()) {
    let side = b.turn();
    console.log(side + " has been mated");
} else {
    console.log("Draw");
}






