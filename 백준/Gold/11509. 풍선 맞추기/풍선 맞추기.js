const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const heights = input[1].split(' ').map(Number);
const arrows = Array(1_000_000 + 1).fill(0);
let answer = 0;

for(const height of heights) {
    if(arrows[height] > 0) {
        arrows[height] -= 1;
        arrows[height - 1] += 1;
    } else {
        arrows[height - 1] += 1;
        answer += 1;
    }
}

console.log(answer);