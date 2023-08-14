const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let count = 0;
let sum = 0;
let a = 1;

while(sum <= n) {
    sum += a;
    a += 1;
    count += 1;
}
console.log(count - 1);