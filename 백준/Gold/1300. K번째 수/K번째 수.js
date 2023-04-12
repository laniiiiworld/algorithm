const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const k = Number(input[1]);

let start = 0;
let end = n * n;
while(start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 0;
    for(let i = 1; i <= n; i++) {
        count += Math.min(Math.floor(mid / i), n);
    }
    if(count < k) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(start);