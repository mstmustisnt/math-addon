const assert = require('assert');
const math = require('../addon');

assert(math.abs(2) === 2);
assert(math.abs(-2) === 2);
assert(math.clz32(0) === 32);
assert(math.clz32(1) === 31);
assert(math.clz32(11) === 28);
assert(math.clz32(7) === 29);
