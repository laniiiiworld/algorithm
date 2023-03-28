const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const graph = input.slice(1).map(row => row.split(' ').map(Number));
const visited = Array(n).fill(false);
let answer = Infinity;

const dfs = (s, b) => {
    if(Math.abs(s - b) < answer) {
        answer = Math.abs(s - b);
    }
    
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        dfs(s * graph[i][0], b + graph[i][1]);
        visited[i] = false;
    }
};

for(let i = 0; i < n; i++) {
    visited[i] = true;
    dfs(graph[i][0], graph[i][1]);
    visited[i] = false;
}

console.log(answer);