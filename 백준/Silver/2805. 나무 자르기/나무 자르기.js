const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let left = 0;
let right = Math.max(...arr);

while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = arr.reduce((acc, cur) => acc += (cur <= mid)? 0 : cur - mid, 0);
    
    if(sum < m) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(right);