const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number);

console.log(numbers.sort((a, b) => a - b).join(' '));