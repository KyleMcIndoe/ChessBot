"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funcs_1 = require("./funcs");
const chess_js_1 = require("chess.js");
const bm_1 = require("./bm");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const b = new chess_js_1.Chess();
const playerSide = prompt("User side: ");
var depth = parseInt(prompt("Depth: "));
if (playerSide == 'w' || playerSide == 'White' || playerSide == 'white' || playerSide == 'W') {
    console.log(b.ascii());
    var firstMove = prompt("First move: ");
    b.move(firstMove);
    console.log(b.ascii());
}
while (b.isGameOver() == false) {
    var dateOne = new Date();
    var [computerBm, searches] = bm_1.bm.findBest(b, depth);
    console.log(computerBm);
    b.move(computerBm.toString());
    var dateTwo = new Date();
    console.log("Current depth: " + depth);
    console.log("Positions searched: " + searches);
    console.log(funcs_1.funcs.timeDiff(dateOne, dateTwo) + " ms");
    console.log(b.ascii());
    if (parseInt(searches.toString()) > 1000000)
        depth--;
    if (parseInt(searches.toString()) < 7500 && b.moveNumber() > 5)
        depth++;
    var userMove = prompt("Your move: ");
    b.move(userMove);
    console.log(b.ascii());
}
if (b.isCheckmate()) {
    let side = b.turn();
    console.log(side + " has been mated");
}
else {
    console.log("Draw");
}
//# sourceMappingURL=index.js.map