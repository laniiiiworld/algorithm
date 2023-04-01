const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[2]);

const graph = [0, ...input[1].split(' ').map(Number)];
for(let i = 1; i <= n; i++) {
    graph[i] += graph[i - 1];
}

const answer = input.slice(3)
                    .map(row => {
                        const [start, end] = row.split(' ').map(Number);
                        return graph[end] - graph[start - 1];
                    })
                    .join('\n');

console.log(answer);