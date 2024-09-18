"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bm = void 0;
const funcs_1 = require("./funcs");
class node {
    constructor(prevB) {
        this.curb = funcs_1.funcs.cloneB(prevB);
        this.turn = this.curb.turn();
    }
}
class bm {
}
exports.bm = bm;
//# sourceMappingURL=bm.js.map