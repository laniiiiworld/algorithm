const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[0].split('').map(Number);
const answer = arr
                .sort((a, b) => b - a)
                .join('');
console.log(answer);