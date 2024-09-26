"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bm = exports.searches = void 0;
const funcs_1 = require("./funcs");
exports.searches = 0;
var dic = new Map();
class node {
    pickEval() {
        let ceval = 0;
        if (this.turn == 'w') {
            ceval = funcs_1.funcs.findMax(this.evals);
        }
        else {
            ceval = funcs_1.funcs.findMin(this.evals);
        }
        return ceval;
    }
    constructor(prevB, move, depth, maxDepth, parent) {
        var _a, _b;
        this.evals = [];
        this.children = [];
        this.evalsOptimal = 0;
        this.curb = prevB;
        this.curb.move(move);
        this.turn = this.curb.turn();
        this.pMoves = funcs_1.funcs.sortMoves(this.curb, 4);
        this.parent = parent;
        exports.searches++;
        if (depth == maxDepth) {
            this.nodeEval = funcs_1.funcs.eval(this.curb);
        }
        else {
            for (let i = 0; i < this.pMoves.length; i++) {
                if (dic.has(this.curb) != true) {
                    this.children.push(new node(this.curb, this.pMoves[i], depth + 1, maxDepth, this));
                    this.evals.push(this.children[i].nodeEval);
                }
                else {
                    let arr = (_a = dic.get(this.curb)) !== null && _a !== void 0 ? _a : [];
                    this.evals.push((_b = arr[i]) !== null && _b !== void 0 ? _b : 0);
                }
                let latestEval = this.evals[this.evals.length - 1];
                if (this.turn == 'w' && latestEval > this.evalsOptimal)
                    this.evalsOptimal = latestEval;
                if (this.turn == 'b' && latestEval < this.evalsOptimal)
                    this.evalsOptimal = latestEval;
                if (this.parent != undefined) {
                    if (this.parent.turn == 'b' && this.evalsOptimal > this.parent.evalsOptimal) {
                        break;
                    }
                    if (this.parent.turn == 'w' && this.evalsOptimal < this.parent.evalsOptimal) {
                        break;
                    }
                }
            }
            this.nodeEval = this.pickEval();
        }
        this.curb.undo();
    }
}
class bm {
    static findBest(b, maxDepth) {
        exports.searches = 0;
        const pMoves = b.moves();
        var pMoveNodes = [];
        var pMovesEvals = [];
        for (let i = 0; i < pMoves.length; i++) {
            pMoveNodes.push(new node(b, pMoves[i], 1, maxDepth));
            pMovesEvals.push(pMoveNodes[i].nodeEval);
        }
        var bestMove;
        if (b.turn() == 'w') {
            bestMove = pMoves[funcs_1.funcs.findMaxdex(pMovesEvals)];
        }
        else {
            bestMove = pMoves[funcs_1.funcs.findMindex(pMovesEvals)];
        }
        return [bestMove, exports.searches];
    }
}
exports.bm = bm;
//# sourceMappingURL=bm.js.map