import {funcs} from './funcs';
import {Chess} from 'chess.js';
import {bm} from './bm';
import PromptSync, * as promptSync from 'prompt-sync'; 

const prompt = PromptSync();

const b = new Chess();

const playerSide = prompt("User side: ");
const depth = parseInt(prompt("Depth: "));

if(playerSide == 'w' || playerSide == 'White' || playerSide == 'white') {
    console.log(b.ascii());
    var firstMove = prompt("First move: ");
    b.move(firstMove);
}

while(b.isGameOver() == false) {
    var computerBm = bm.findBest(b, depth);
    console.log(computerBm);
    b.move(computerBm);
    console.log(b.ascii());

    var userMove = prompt("Your move: ");
    b.move(userMove);
    console.log(b.ascii());
}






