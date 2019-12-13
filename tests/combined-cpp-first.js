const mathaddon = require('../addon');

const cppClz32Label = 'CPP: clz32';
const cppAbsLabel = 'CPP: abs';
const jsAbsLabel = 'JS: abs';
const jsClz32Label = 'JS: clz32';

console.log('--- TIME REPORT: ALL CALLS IN 1 FILE. CPP CALLS FIRST ---');
console.time(cppAbsLabel);
mathaddon.abs(-2);
mathaddon.abs(2);
console.timeEnd(cppAbsLabel);

console.time(cppClz32Label);
mathaddon.clz32(1);
mathaddon.clz32(11);
mathaddon.clz32(7);
console.timeEnd(cppClz32Label);

console.time(jsAbsLabel);
Math.abs(-2);
Math.abs(2);
console.timeEnd(jsAbsLabel);

console.time(jsClz32Label);
Math.clz32(1);
Math.clz32(11);
Math.clz32(7);
console.timeEnd(jsClz32Label);

