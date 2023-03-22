const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input.slice(1).map(item => item.split(' ').map(Number));
numbers.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
console.log(numbers.map(v => v.join(' ')).join('\n'));