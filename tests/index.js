const assert = require('assert');

const math = require('bindings')('mathaddon.node');

assert(math.abs(2) === 2, 'math.abs(2) is not 2');
assert(math.abs(-2) === 2, 'math.abs(-2) is not 2');
assert(math.clz32(0) === 32, 'math.clz32(0) is not 32');
assert(math.clz32(1) === 31, 'math.clz32(1) is not  31');
assert(math.clz32(11) === 28, 'math.clz32(11) is not  28');
assert(math.clz32(7) === 29, 'math.clz32(7) is not  29');
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


