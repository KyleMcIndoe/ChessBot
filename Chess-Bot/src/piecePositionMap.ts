
class posVals { // how strong a piece is on a given position
    public p: number;
    public n: number;
    public b: number;
    public r: number;
    public q: number;
    public k: number;

    constructor(pv: number, nv: number, bv: number, rv: number, qv: number, kv: number) {
        this.p = pv;
        this.n = nv;
        this.b = bv;
        this.r = rv;
        this.q = qv;
        this.k = kv;
    }
}


export var PHMap = new Map<string, posVals>(); // position values hash map

// White hashmap



PHMap.set("a1w", new posVals(0.0, 1, 1, 1, 1, 1)); // pawn, knight, bishop, rook, queen, king
PHMap.set("b1w", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("c1w", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("d1w", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("e1w", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("f1w", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("g1w", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("h1w", new posVals(0.0, 1, 1, 1, 1, 1));

PHMap.set("a2w", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("b2w", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("c2w", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("d2w", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("e2w", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("f2w", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("g2w", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("h2w", new posVals(0.1, 1, 1, 1, 1, 1));

PHMap.set("a3w", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("b3w", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("c3w", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("d3w", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("e3w", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("f3w", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("g3w", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("h3w", new posVals(0.2, 1, 1, 1, 1, 1));

PHMap.set("a4w", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("b4w", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("c4w", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("d4w", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("e4w", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("f4w", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("g4w", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("h4w", new posVals(0.3, 1, 1, 1, 1, 1));

PHMap.set("a5w", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("b5w", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("c5w", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("d5w", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("e5w", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("f5w", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("g5w", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("h5w", new posVals(0.4, 1, 1, 1, 1, 1));

PHMap.set("a6w", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("b6w", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("c6w", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("d6w", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("e6w", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("f6w", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("g6w", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("h6w", new posVals(0.5, 1, 1, 1, 1, 1));

PHMap.set("a7w", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("b7w", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("c7w", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("d7w", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("e7w", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("f7w", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("g7w", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("h7w", new posVals(0.6, 1, 1, 1, 1, 1));

PHMap.set("a8w", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("b8w", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("c8w", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("d8w", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("e8w", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("f8w", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("g8w", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("h8w", new posVals(0.7, 1, 1, 1, 1, 1));


// Black hashmap


PHMap.set("a1", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("b1", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("c1", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("d1", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("e1", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("f1", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("g1", new posVals(0.7, 1, 1, 1, 1, 1));
PHMap.set("h1", new posVals(0.7, 1, 1, 1, 1, 1));

PHMap.set("a2", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("b2", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("c2", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("d2", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("e2", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("f2", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("g2", new posVals(0.6, 1, 1, 1, 1, 1));
PHMap.set("h2", new posVals(0.6, 1, 1, 1, 1, 1));

PHMap.set("a3", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("b3", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("c3", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("d3", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("e3", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("f3", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("g3", new posVals(0.5, 1, 1, 1, 1, 1));
PHMap.set("h3", new posVals(0.5, 1, 1, 1, 1, 1));

PHMap.set("a4", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("b4", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("c4", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("d4", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("e4", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("f4", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("g4", new posVals(0.4, 1, 1, 1, 1, 1));
PHMap.set("h4", new posVals(0.4, 1, 1, 1, 1, 1));

PHMap.set("a5", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("b5", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("c5", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("d5", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("e5", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("f5", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("g5", new posVals(0.3, 1, 1, 1, 1, 1));
PHMap.set("h5", new posVals(0.3, 1, 1, 1, 1, 1));

PHMap.set("a6", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("b6", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("c6", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("d6", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("e6", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("f6", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("g6", new posVals(0.2, 1, 1, 1, 1, 1));
PHMap.set("h6", new posVals(0.2, 1, 1, 1, 1, 1));

PHMap.set("a7", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("b7", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("c7", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("d7", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("e7", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("f7", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("g7", new posVals(0.1, 1, 1, 1, 1, 1));
PHMap.set("h7", new posVals(0.1, 1, 1, 1, 1, 1));

PHMap.set("a8", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("b8", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("c8", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("d8", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("e8", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("f8", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("g8", new posVals(0.0, 1, 1, 1, 1, 1));
PHMap.set("h8", new posVals(0.0, 1, 1, 1, 1, 1));