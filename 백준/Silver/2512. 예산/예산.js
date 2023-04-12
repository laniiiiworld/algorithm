const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const m = Number(input[2]);

let left = 0;
let right = Math.max(...arr);
while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = arr.reduce((acc, cur) => acc += (mid < cur)? mid : cur, 0);
    
    if(sum <= m) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(right);