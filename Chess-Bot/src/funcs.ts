import { Chess } from "chess.js";

export abstract class funcs {

    public static eval(x: Chess) {
        let whiteScore: number = 0;
        let blackScore: number = 0;

    }
    
    public static cloneB(x: Chess) { // clone board
        let y = x.pgn();
        let a = new Chess();
        a.loadPgn(y);
        return a;
    }



}