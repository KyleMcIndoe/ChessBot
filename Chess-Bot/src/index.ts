import {funcs} from './funcs';
import {Chess} from 'chess.js';

const c = new Chess();
const b = funcs.cloneB(c);
var m = c.moves();
b.move("e4");
console.log(b.ascii());
console.log(c.ascii());
