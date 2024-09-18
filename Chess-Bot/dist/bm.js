"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bm = exports.searches = void 0;
const funcs_1 = require("./funcs");
exports.searches = 0;
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
        this.evals = [];
        this.children = [];
        this.evalsOptimal = 0;
        this.curb = funcs_1.funcs.cloneB(prevB);
        this.curb.move(move);
        this.turn = this.curb.turn();
        this.pMoves = this.curb.moves();
        this.parent = parent;
        exports.searches++;
        if (depth == maxDepth) {
            this.nodeEval = funcs_1.funcs.eval(this.curb);
        }
        else {
            for (let i = 0; i < this.pMoves.length; i++) {
                this.children.push(new node(this.curb, this.pMoves[i], depth + 1, maxDepth, this));
                this.evals.push(this.children[i].nodeEval);
                let latestEval = this.children[i].nodeEval;
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
        console.log("Nodes searched: " + exports.searches);
        return bestMove;
    }
}
exports.bm = bm;
//# sourceMappingURL=bm.js.map