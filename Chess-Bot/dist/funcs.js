"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcs = void 0;
const chess_js_1 = require("chess.js");
class funcs {
    static eval(x) {
        if (x.isCheckmate() && x.turn() == 'w') {
            return -100000;
        }
        if (x.isCheckmate() && x.turn() == 'b') {
            return 100000;
        }
        if (x.isDraw())
            return 0;
        let whiteScore = 0;
        let blackScore = 0;
        let bEval = 0;
        return bEval;
    }
    static cloneB(x) {
        let y = x.pgn();
        let a = new chess_js_1.Chess();
        a.loadPgn(y);
        return a;
    }
    static findMax(arr) {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max)
                max = arr[i];
        }
        return max;
    }
    static findMin(arr) {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min)
                min = arr[i];
        }
        return min;
    }
    static findMindex(arr) {
        let mindex = 0;
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                mindex = i;
                min = arr[i];
            }
        }
        return mindex;
    }
    static findMaxdex(arr) {
        let maxdex = 0;
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                maxdex = i;
                max = arr[i];
            }
        }
        return maxdex;
    }
}
exports.funcs = funcs;
//# sourceMappingURL=funcs.js.map