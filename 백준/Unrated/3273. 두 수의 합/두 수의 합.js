const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);
const x = Number(input[2]);
let count = 0;

let start = 0;
let end = n - 1;
while(start < end) {
    const number = numbers[start] + numbers[end];
    if(number === x) {
        count += 1;
        start += 1;
        end -= 1;
    } else if(number < x) {
        start += 1;
    } else {
        end -= 1;
    }
}

console.log(count);