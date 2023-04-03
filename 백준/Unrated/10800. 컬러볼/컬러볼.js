const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const MAX_SIZE = 200_000;
const n = Number(input[0]);
const balls = input
                .slice(1)
                .map((row, index) => [index, ...row.split(' ').map(Number)])
                .sort((a, b) => a[2] - b[2]);
let sum = 0;
const colorSum = Array(MAX_SIZE + 1).fill(0);
const answer = Array(n).fill(0);

let start = 0;

while(start < n) {
    let end = start;
    
    while(end < n && balls[start][2] === balls[end][2]) end += 1;
    
    for(let i = start; i < end; i++) {
        answer[balls[i][0]] = sum - colorSum[balls[i][1]];
    }
    
    for(let i = start; i < end; i++) {
        colorSum[balls[i][1]] += balls[i][2];
        sum += balls[i][2];
    }

    start = end;
}

console.log(answer.join('\n'));