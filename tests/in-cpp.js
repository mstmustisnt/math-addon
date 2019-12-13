const mathaddon = require('../addon');

const clz32Label = 'CPP: clz32';
const absLabel = 'CPP: abs';

console.time(absLabel);
mathaddon.abs(-2);
mathaddon.abs(2);
console.timeEnd(absLabel);

console.time(clz32Label);
mathaddon.clz32(1);
mathaddon.clz32(11);
mathaddon.clz32(7);
console.timeEnd(clz32Label);