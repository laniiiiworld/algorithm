const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let left = 0;
let right = Math.max(...arr);

while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = arr.reduce((acc, cur) => acc += Math.floor(cur / mid), 0);
    
    if(count < n) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(right);