"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHMap = void 0;
class posVals {
    constructor(pv, nv, bv, rv, qv, kv) {
        this.p = pv;
        this.n = nv;
        this.b = bv;
        this.r = rv;
        this.q = qv;
        this.k = kv;
    }
}
exports.PHMap = new Map(); // position values hash map
// White hashmap
exports.PHMap.set("a1w", new posVals(0.0, 1, 1, 1, 1, 1)); // pawn, knight, bishop, rook, queen, king
exports.PHMap.set("b1w", new posVals(0.0, 1, 1, 1, 1, 1));
exports.PHMap.set("c1w", new posVals(0.0, 1, 1, 1, 1, 2));
exports.PHMap.set("d1w", new posVals(0.0, 1, 1, 1.5, 1, 1));
exports.PHMap.set("e1w", new posVals(0.0, 1, 1, 1, 1, 1));
exports.PHMap.set("f1w", new posVals(0.0, 1, 1, 2, 1, 1));
exports.PHMap.set("g1w", new posVals(0.0, 1, 1, 1, 1, 3));
exports.PHMap.set("h1w", new posVals(0.0, 1, 1, 1, 1, 1.5));
exports.PHMap.set("a2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("b2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("c2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("d2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("e2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("f2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("g2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("h2w", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("a3w", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("b3w", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("c3w", new posVals(0.2, 2, 1, 1, 1, 1));
exports.PHMap.set("d3w", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("e3w", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("f3w", new posVals(0.2, 2, 1, 1, 1, 1));
exports.PHMap.set("g3w", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("h3w", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("a4w", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("b4w", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("c4w", new posVals(0.3, 1, 2, 1, 1, 1));
exports.PHMap.set("d4w", new posVals(0.9, 1, 1, 1, 1, 1));
exports.PHMap.set("e4w", new posVals(0.9, 1, 1, 1, 1, 1));
exports.PHMap.set("f4w", new posVals(0.3, 1, 2, 1, 1, 1));
exports.PHMap.set("g4w", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("h4w", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("a5w", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("b5w", new posVals(0.4, 1.5, 1, 1, 1, 1));
exports.PHMap.set("c5w", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("d5w", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("e5w", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("f5w", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("g5w", new posVals(0.4, 1.5, 1, 1, 1, 1));
exports.PHMap.set("h5w", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("a6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("b6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("c6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("d6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("e6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("f6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("g6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("h6w", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("a7w", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("b7w", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("c7w", new posVals(0.6, 2, 1, 1, 1, 1));
exports.PHMap.set("d7w", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("e7w", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("f7w", new posVals(0.6, 2, 1, 1, 1, 1));
exports.PHMap.set("g7w", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("h7w", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("a8w", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("b8w", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("c8w", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("d8w", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("e8w", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("f8w", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("g8w", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("h8w", new posVals(0.7, 1, 1, 1, 1, 1));
// Black hashmap
exports.PHMap.set("a1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("b1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("c1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("d1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("e1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("f1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("g1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("h1b", new posVals(0.7, 1, 1, 1, 1, 1));
exports.PHMap.set("a2b", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("b2b", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("c2b", new posVals(0.6, 2, 1, 1, 1, 1));
exports.PHMap.set("d2b", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("e2b", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("f2b", new posVals(0.6, 2, 1, 1, 1, 1));
exports.PHMap.set("g2b", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("h2b", new posVals(0.6, 1, 1, 1, 1, 1));
exports.PHMap.set("a3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("b3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("c3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("d3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("e3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("f3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("g3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("h3b", new posVals(0.5, 1, 1, 1, 1, 1));
exports.PHMap.set("a4b", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("b4b", new posVals(0.4, 1.5, 1, 1, 1, 1));
exports.PHMap.set("c4b", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("d4b", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("e4b", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("f4b", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("g4b", new posVals(0.4, 1.5, 1, 1, 1, 1));
exports.PHMap.set("h4b", new posVals(0.4, 1, 1, 1, 1, 1));
exports.PHMap.set("a5b", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("b5b", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("c5b", new posVals(0.3, 1, 2, 1, 1, 1));
exports.PHMap.set("d5b", new posVals(0.9, 1, 1, 1, 1, 1));
exports.PHMap.set("e5b", new posVals(0.9, 1, 1, 1, 1, 1));
exports.PHMap.set("f5b", new posVals(0.3, 1, 2, 1, 1, 1));
exports.PHMap.set("g5b", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("h5b", new posVals(0.3, 1, 1, 1, 1, 1));
exports.PHMap.set("a6b", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("b6b", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("c6b", new posVals(0.2, 2, 1, 1, 1, 1));
exports.PHMap.set("d6b", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("e6b", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("f6b", new posVals(0.2, 2, 1, 1, 1, 1));
exports.PHMap.set("g6b", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("h6b", new posVals(0.2, 1, 1, 1, 1, 1));
exports.PHMap.set("a7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("b7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("c7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("d7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("e7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("f7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("g7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("h7b", new posVals(0.1, 1, 1, 1, 1, 1));
exports.PHMap.set("a8b", new posVals(0.0, 1, 1, 1, 1, 1));
exports.PHMap.set("b8b", new posVals(0.0, 1, 1, 1, 1, 1));
exports.PHMap.set("c8b", new posVals(0.0, 1, 1, 1, 1, 2));
exports.PHMap.set("d8b", new posVals(0.0, 1, 1, 1.5, 1, 1));
exports.PHMap.set("e8b", new posVals(0.0, 1, 1, 1, 1, 1));
exports.PHMap.set("f8b", new posVals(0.0, 1, 1, 2, 1, 1));
exports.PHMap.set("g8b", new posVals(0.0, 1, 1, 1, 1, 3));
exports.PHMap.set("h8b", new posVals(0.0, 1, 1, 1, 1, 1.5));
//# sourceMappingURL=piecePositionMap.js.map