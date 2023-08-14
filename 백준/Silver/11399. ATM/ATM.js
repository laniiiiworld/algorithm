const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const graph = input[1].split(' ').map(Number);

graph.sort((a, b) => a - b);

for(let i = 1; i < n; i++) {
    graph[i] += graph[i - 1];
}

console.log(graph.reduce((sum, cur) => sum += cur, 0));