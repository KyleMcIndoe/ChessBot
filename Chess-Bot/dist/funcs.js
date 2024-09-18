"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcs = void 0;
const chess_js_1 = require("chess.js");
class funcs {
    static eval(x) {
        let whiteScore = 0;
        let blackScore = 0;
    }
    static cloneB(x) {
        let y = x.pgn();
        let a = new chess_js_1.Chess();
        a.loadPgn(y);
        return a;
    }
}
exports.funcs = funcs;
//# sourceMappingURL=funcs.js.map