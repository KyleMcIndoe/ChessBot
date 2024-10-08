import { Chess, Color } from "chess.js";
import {funcs} from './funcs'

export var searches: number = 0;

var dic = new Map<Chess, number[]>();

class node {
    public curb: Chess;
    public turn: Color;
    public pMoves: string[];
    public nodeEval: number;
    public evals: number[] = [];
    public children: node[] = [];
    public parent?: node;
    public evalsOptimal: number = 0;

    pickEval() {
        let ceval = 0;
        if(this.turn == 'w') {
            ceval = funcs.findMax(this.evals);
        } else {
            ceval = funcs.findMin(this.evals);
        }
        return ceval;
    }

    constructor(prevB: Chess,move: string, depth: number, maxDepth: number, parent?: node) {
        this.curb = prevB;
        this.curb.move(move);
        this.turn = this.curb.turn();
        this.pMoves = this.curb.moves().sort().reverse();
        this.parent = parent; 

        

        searches++;

        if(depth == maxDepth) {
            this.nodeEval = funcs.eval(this.curb);

        } else {
            for(let i = 0; i < this.pMoves.length; i++) {

                if(dic.has(this.curb) != true) {
                    this.children.push(new node(this.curb, this.pMoves[i], depth + 1, maxDepth, this))
                    this.evals.push(this.children[i].nodeEval);
                } else {
                    let arr = dic.get(this.curb) ?? [];
                    this.evals.push(arr[i] ?? 0)
                }

                let latestEval = this.evals[this.evals.length - 1];

                if(this.turn == 'w' && latestEval > this.evalsOptimal) this.evalsOptimal = latestEval;
                if(this.turn == 'b' && latestEval < this.evalsOptimal) this.evalsOptimal = latestEval;

                if(this.parent != undefined) {
                    if(this.parent.turn == 'b' && this.evalsOptimal > this.parent.evalsOptimal) {
                        break;
                    }
                    if(this.parent.turn == 'w' && this.evalsOptimal < this.parent.evalsOptimal) {
                        break;
                    }
                }
            }
            this.nodeEval = this.pickEval()
        }
        
        this.curb.undo();
    }
}

export abstract class bm {
    public static findBest(b: Chess, maxDepth: number) {
        searches = 0;
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
        return [bestMove, searches];
    }
}