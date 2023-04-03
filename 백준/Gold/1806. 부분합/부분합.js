const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, s] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);
let start = 0;
let end = 0;
let sum = numbers[0];
let length = n + 1;

while(start < n) {
    while(end < n - 1 && sum < s) {
        sum += numbers[++end];
    }
    
    if(sum >= s) length = Math.min(length, end - start + 1);
    
    sum -= numbers[start++];
}

if(length === n + 1) {
    console.log(0);
} else {
    console.log(length);
}