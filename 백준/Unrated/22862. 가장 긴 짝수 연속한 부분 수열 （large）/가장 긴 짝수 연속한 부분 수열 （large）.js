const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const s = input[1].split(' ').map(v => Number(v) % 2);

let start = 0;
let end = 0;
let deleteCount = 0;
let length = 0;

while(start < n) {
    while(end < n) {
        if(s[end] === 0) {
            end += 1;
        } else {
            if(deleteCount === k) break;
            deleteCount += 1;
            end += 1;
        }
    }
    length = Math.max(length, end - start - deleteCount);
    if(s[start] === 1) deleteCount -= 1;
    start += 1;
}

console.log(length);