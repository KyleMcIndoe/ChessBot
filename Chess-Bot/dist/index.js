"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcs_1 = require("./funcs");
const chess_js_1 = require("chess.js");
const c = new chess_js_1.Chess();
const b = funcs_1.funcs.cloneB(c);
var m = c.moves();
b.move("e4");
console.log(b.ascii());
console.log(c.ascii());
//# sourceMappingURL=index.js.map