import { Chess, Color } from "chess.js";
import {funcs} from './funcs'

class node {
    public curb: Chess;
    public turn: Color;
    public pMoves: string[];
    public nodeEval: number;
    public evals: number[] = [];
    public children: node[] = [];

    pickEval() {
        let ceval = 0;
        if(this.turn == 'w') {
            ceval = funcs.findMax(this.evals);
        } else {
            ceval = funcs.findMin(this.evals);
        }
        return ceval;
    }

    constructor(prevB: Chess,move: string, depth: number, maxDepth: number) {
        this.curb = funcs.cloneB(prevB);
        this.curb.move(move);
        this.turn = this.curb.turn();
        this.pMoves = this.curb.moves();

        

        if(depth == maxDepth) {
            this.nodeEval = funcs.eval(this.curb);
        } else {
            for(let i = 0; i < this.pMoves.length; i++) {
                this.children.push(new node(this.curb, this.pMoves[i], depth + 1, maxDepth))
                this.evals.push(this.children[i].nodeEval);
            }
            this.nodeEval = this.pickEval()
        }
        
    }
}

export abstract class bm {
    public static findBest(b: Chess, maxDepth: number) {
        const pMoves = b.moves();
        var pMoveNodes = [];
        var pMovesEvals = [];

        for(let i = 0; i < pMoves.length; i++) {
            pMoveNodes.push(new node(b, pMoves[i], 1, maxDepth));
            pMovesEvals.push(pMoveNodes[i].nodeEval);
        }

        var bestMove: string;

        if(b.turn() == 'w') {
            bestMove = pMoves[funcs.findMaxdex(pMovesEvals)];
        } else {
            bestMove = pMoves[funcs.findMindex(pMovesEvals)];
        }
        return bestMove;
    }
}