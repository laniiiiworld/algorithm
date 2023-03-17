const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...arr);

let answer = 0;
while(start <= end) {
    const mid = parseInt((start + end) / 2);
    const sum = arr.reduce((sum, cur) => sum += parseInt(cur / mid), 0);
    
    if(sum < n) {
        end = mid - 1;
    } else {
        answer = mid;
        start = mid + 1;
    }
}

console.log(answer);