const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

let sum = 0;
const sums = [0, ...input[1].split(' ').map(v => sum += Number(v))];
const processed = [0];
const counter = Array(m).fill(0);
counter[0] += 1;

for(let i = 1; i <= n; i++) {
    processed.push(sums[i] % m);
    counter[processed[i]] += 1;
}

let answer = 0;
for(const count of counter) {
    if(count === 0) continue;
    answer += parseInt(count * (count - 1) / 2);
}

console.log(answer);