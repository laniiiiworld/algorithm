const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number).sort((a, b) => a - b);
const x = Number(input[2]);
let count = 0;

let start = 0;
let end = n - 1;
//start를 고정한 상태에서 end를 최대한 왼쪽으로 이동시키는 구현
while(start < end) {
    while(start < end && numbers[start] + numbers[end] > x) {
        end -= 1;
    }
    if(numbers[start] + numbers[end] === x) {
        count += 1;
        end -= 1; //모든 정수는 다르다.
    }
    start += 1;
}

console.log(count);