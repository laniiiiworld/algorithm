const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers[k - 1]);