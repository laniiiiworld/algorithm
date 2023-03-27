const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const k = Number(input[1]);
const A = Array.from({length: n}, (_, i) => i + 1);

let start = 1;
let end = n * n;

while(start <= end) {
    const mid = parseInt((start + end) / 2);
    const count = A.reduce((sum, row) => sum += Math.min(Math.floor(mid / row), n), 0);
    if(count < k) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(start);