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
        if (x.get("e4") != null) {
            if (x.get("e4").color == 'b')
                bEval -= 5;
            if (x.get("e4").color == 'w')
                bEval += 5;
        }
        if (x.get("d4") != null) {
            if (x.get("d4").color == 'b')
                bEval -= 5;
            if (x.get("d4").color == 'w')
                bEval += 5;
        }
        if (x.get("e5") != null) {
            if (x.get("e5").color == 'b')
                bEval -= 5;
            if (x.get("e5").color == 'w')
                bEval += 5;
        }
        if (x.get("d5") != null) {
            if (x.get("d5").color == 'b')
                bEval -= 5;
            if (x.get("d5").color == 'w')
                bEval += 5;
        }
        bEval += this.materialBalance(x) * 2;
        const bCastle = x.getCastlingRights(chess_js_1.BLACK);
        const wCastle = x.getCastlingRights(chess_js_1.WHITE);
        if (bCastle.q)
            bEval - 2;
        if (bCastle.k)
            bEval - 3;
        if (wCastle.q)
            bEval + 2;
        if (wCastle.k)
            bEval + 3;
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
    static materialBalance(b) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const barr = b.board();
        let blackMaterial = 0;
        let whiteMaterial = 0;
        for (let i = 0; i < barr.length; i++) {
            for (let j = 0; j < barr[i].length; j++) {
                if (barr[i][j] != null) {
                    if (((_a = barr[i][j]) === null || _a === void 0 ? void 0 : _a.color) == 'w') {
                        if (((_b = barr[i][j]) === null || _b === void 0 ? void 0 : _b.type) == 'p')
                            whiteMaterial += 1;
                        if (((_c = barr[i][j]) === null || _c === void 0 ? void 0 : _c.type) == 'b')
                            whiteMaterial += 3;
                        if (((_d = barr[i][j]) === null || _d === void 0 ? void 0 : _d.type) == 'n')
                            whiteMaterial += 3;
                        if (((_e = barr[i][j]) === null || _e === void 0 ? void 0 : _e.type) == 'r')
                            whiteMaterial += 5;
                        if (((_f = barr[i][j]) === null || _f === void 0 ? void 0 : _f.type) == 'q')
                            whiteMaterial += 9;
                    }
                    else {
                        if (((_g = barr[i][j]) === null || _g === void 0 ? void 0 : _g.type) == 'p')
                            blackMaterial += 1;
                        if (((_h = barr[i][j]) === null || _h === void 0 ? void 0 : _h.type) == 'b')
                            blackMaterial += 3;
                        if (((_j = barr[i][j]) === null || _j === void 0 ? void 0 : _j.type) == 'n')
                            blackMaterial += 3;
                        if (((_k = barr[i][j]) === null || _k === void 0 ? void 0 : _k.type) == 'r')
                            blackMaterial += 5;
                        if (((_l = barr[i][j]) === null || _l === void 0 ? void 0 : _l.type) == 'q')
                            blackMaterial += 9;
                    }
                }
            }
        }
        return whiteMaterial - blackMaterial;
    }
}
exports.funcs = funcs;
//# sourceMappingURL=funcs.js.map