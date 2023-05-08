const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const answer = Array.from({length: n}, () => new Set());
const graph = [];
for(let i = 1; i <= n; i++) {
    const row = input[i].split('');
    graph.push(row.map(v => v === 'Y'? 1 : 0));
}

for(let c = 0; c < n; c++) {
    for(let a = 0; a < n; a++) {
        for(let b = 0; b < n; b++) {
            if(a === b) continue;
            if(!graph[a][b] && !(graph[a][c] && graph[c][b])) continue;
            answer[a].add(b);
            answer[b].add(a);
        }
    }
}

console.log(Math.max(...answer.map(item => item.size)));