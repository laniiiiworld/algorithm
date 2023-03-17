const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const trees = input[1].split(' ');

let start = 0;
let end = Math.max(...trees);

while(start <= end) {
    const mid = parseInt((start + end) / 2);
    const sum = trees.reduce((sum, cur) => sum += (cur > mid)? (cur - mid) : 0, 0);
    
    if(sum === m) {
        end = mid;
        break;
    } else if(sum < m) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

console.log(end);