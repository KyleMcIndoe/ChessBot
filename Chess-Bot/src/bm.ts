import { Chess, Color } from "chess.js";
import {funcs} from './funcs'

class node {
    public curb: Chess;
    public turn: Color;

    constructor(prevB: Chess) {
        this.curb = funcs.cloneB(prevB);
        this.turn = this.curb.turn();
    }
}

export abstract class bm {
    
}