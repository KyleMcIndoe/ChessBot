"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bm = void 0;
const funcs_1 = require("./funcs");
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
    constructor(prevB, move, depth, maxDepth) {
        this.evals = [];
        this.children = [];
        this.curb = funcs_1.funcs.cloneB(prevB);
        this.curb.move(move);
        this.turn = this.curb.turn();
        this.pMoves = this.curb.moves();
        if (depth == maxDepth) {
            this.nodeEval = funcs_1.funcs.eval(this.curb);
        }
        else {
            for (let i = 0; i < this.pMoves.length; i++) {
                this.children.push(new node(this.curb, this.pMoves[i], depth + 1, maxDepth));
                this.evals.push(this.children[i].nodeEval);
            }
            this.nodeEval = this.pickEval();
        }
    }
}
class bm {
    static findBest(b, maxDepth) {
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
        return bestMove;
    }
}
exports.bm = bm;
//# sourceMappingURL=bm.js.map