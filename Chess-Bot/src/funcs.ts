import { Chess } from "chess.js";

export abstract class funcs {

    public static eval(x: Chess) {

        if(x.isCheckmate() && x.turn() == 'w') {
            return -100000;
        }

        if(x.isCheckmate() && x.turn() == 'b') {
            return 100000;
        }

        if(x.isDraw()) return 0;

        let whiteScore: number = 0;
        let blackScore: number = 0;

        let bEval: number = 0;

        if(x.get("e4") != null) {
            if(x.get("e4").color == 'b') bEval -= 5;
            if(x.get("e4").color == 'w') bEval += 5;
        }
        if(x.get("d4") != null) {
            if(x.get("d4").color == 'b') bEval -= 5;
            if(x.get("d4").color == 'w') bEval += 5;
        }
        if(x.get("e5") != null) {
            if(x.get("e5").color == 'b') bEval -= 5;
            if(x.get("e5").color == 'w') bEval += 5;
        }
        if(x.get("d5") != null) {
            if(x.get("d5").color == 'b') bEval -= 5;
            if(x.get("d5").color == 'w') bEval += 5;
        } 

        return bEval;

    }
    
    public static cloneB(x: Chess) { // clone board
        let y = x.pgn();
        let a = new Chess();
        a.loadPgn(y);
        return a;
    }

    public static findMax(arr: number[]) {
        let max: number = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > max) max = arr[i];
        }

        return max;
    }

    public static findMin(arr: number[]) {
        let min = arr[0];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < min) min = arr[i];
        }
        return min;
    }

    public static findMindex(arr: number[]) {
        let mindex = 0;
        let min = arr[0];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < min) {
                mindex = i;
                min = arr[i];
            }
        }
        return mindex;
    }

    public static findMaxdex(arr: number[]) {
        let maxdex = 0;
        let max = 0;

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > max){
                maxdex = i;
                max = arr[i]
            }
        }
        return maxdex;
    }

}