const mathaddon = require('../addon');

console.log('--- TIME REPORT: ALL CALLS IN 1 FILE. CPP CALLS FIRST ---');
console.time('CPP: abs');
mathaddon.abs(-2);
mathaddon.abs(2);
console.timeEnd('CPP: abs');

console.time('CPP: clz32');
mathaddon.clz32(1);
mathaddon.clz32(11);
mathaddon.clz32(7);
console.timeEnd('CPP: clz32');

console.time('JS: abs');
Math.abs(-2);
Math.abs(2);
console.timeEnd('JS: abs');

console.time('JS: clz32');
Math.clz32(1);
Math.clz32(11);
Math.clz32(7);
console.timeEnd('JS: clz32');

