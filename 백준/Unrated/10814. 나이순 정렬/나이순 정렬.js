const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(v => v.split(' '));
const answer = arr
                .sort((a, b) => a[0] - b[0])
                .map(item => item.join(' '))
                .join('\n');
console.log(answer);