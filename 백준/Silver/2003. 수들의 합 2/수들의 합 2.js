const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
let answer = 0;
let start = 0;
let end = 0;
let sum = numbers[0];

while(start < n && end < n) {
    if(sum === m) {
        answer += 1;
        end += 1;
        sum += numbers[end];
        sum -= numbers[start];
        start += 1;
        continue;
    }
    if(sum < m) {
        end += 1;
        sum += numbers[end];
    } else {
        sum -= numbers[start];
        start += 1;
    }
}

console.log(answer);