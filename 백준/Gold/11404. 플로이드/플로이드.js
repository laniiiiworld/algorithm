const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
const graph = Array.from({length: n}, (_, i) => Array.from({length: n}, (_, j) => (i === j)? 0 : Infinity));
for(let i = 0; i < m; i++) {
    const [a, b, c] = input[i + 2].split(' ').map(Number);
    graph[a - 1][b - 1] = Math.min(graph[a - 1][b - 1], c);
}

for(let k = 0; k < n; k++) {
    for(let a = 0; a < n; a++) {
        for(let b = 0; b < n; b++) {
            const distance = graph[a][k] + graph[k][b];
            graph[a][b] = Math.min(graph[a][b], distance);
        }
    }
}

let answer = '';
for(const row of graph) answer += `${row.join(' ').replaceAll('Infinity', '0')}\n`;
console.log(answer);