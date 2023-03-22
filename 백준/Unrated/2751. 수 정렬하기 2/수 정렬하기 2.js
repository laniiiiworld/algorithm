const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

console.log(numbers.sort((a, b) => a - b).join('\n'));