"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chess_js_1 = require("chess.js");
const bm_1 = require("./bm");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const b = new chess_js_1.Chess();
const playerSide = prompt("User side: ");
const depth = parseInt(prompt("Depth"));
if (playerSide == 'w' || playerSide == 'White' || playerSide == 'white') {
    console.log(b.ascii());
    var firstMove = prompt("First move: ");
    b.move(firstMove);
}
while (b.isGameOver() == false) {
    var computerBm = bm_1.bm.findBest(b, depth);
    b.move(computerBm);
    console.log(b.ascii());
    var userMove = prompt("Your move: ");
    b.move(userMove);
    console.log(b.ascii());
}
//# sourceMappingURL=index.js.map