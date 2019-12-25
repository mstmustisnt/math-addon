const assert = require('assert');

const math = require('bindings')('mathaddon.node');

assert(math.abs(2) === 2);
assert(math.abs(-2) === 2);
assert(math.clz32(0) === 32);
assert(math.clz32(1) === 31);
assert(math.clz32(11) === 28);
assert(math.clz32(7) === 29);
assert.throws(math.clz32.bind(math,'string'), {
    name: 'TypeError',
    message: 'Wrong arguments',
});
assert.throws(math.abs.bind(math,'string'), {
    name: 'TypeError',
    message: 'Wrong arguments',
});
assert.throws(math.clz32.bind(math), {
    name: 'TypeError',
    message: 'Wrong number of arguments',
});
assert.throws(math.abs.bind(math), {
    name: 'TypeError',
    message: 'Wrong number of arguments',
});


