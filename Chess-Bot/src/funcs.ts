import { BLACK, Chess, WHITE } from "chess.js";

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

        bEval += this.materialBalance(x) * 2;

        const bCastle = x.getCastlingRights(BLACK);
        const wCastle = x.getCastlingRights(WHITE);

        if(bCastle.q) bEval -2;
        if(bCastle.k) bEval -3;
        if(wCastle.q) bEval +2;
        if(wCastle.k) bEval +3;

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

    public static materialBalance(b: Chess) {
        const barr = b.board();
        let blackMaterial: number = 0;
        let whiteMaterial: number = 0;
        for(let i = 0; i < barr.length; i++) {
            for(let j = 0; j < barr[i].length; j++) {
                if(barr[i][j] != null) {
                    if(barr[i][j]?.color == 'w') {
                        if(barr[i][j]?.type == 'p') whiteMaterial += 1;
                        if(barr[i][j]?.type == 'b') whiteMaterial += 3;
                        if(barr[i][j]?.type == 'n') whiteMaterial += 3;
                        if(barr[i][j]?.type == 'r') whiteMaterial += 5;
                        if(barr[i][j]?.type == 'q') whiteMaterial += 9;
                    } else {
                        if(barr[i][j]?.type == 'p') blackMaterial += 1;
                        if(barr[i][j]?.type == 'b') blackMaterial += 3;
                        if(barr[i][j]?.type == 'n') blackMaterial += 3;
                        if(barr[i][j]?.type == 'r') blackMaterial += 5;
                        if(barr[i][j]?.type == 'q') blackMaterial += 9;
                    }

                }
            } 
        }

        return whiteMaterial - blackMaterial;
    }

    public static timeDiff(a: Date, b: Date) {
        let x: number = 0;
        x += b.getMilliseconds() - a.getMilliseconds();
        return x;
    }
}