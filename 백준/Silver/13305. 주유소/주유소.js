const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const roads = input[1].split(' ').map(Number);
const costs = input[2].split(' ').map(Number);

let answer = costs[0] * roads[0];

for(let i = 1; i < n - 1; i++) {
    costs[i] = Math.min(costs[i - 1], costs[i]);
    answer += costs[i] * roads[i];
}

console.log(answer);