const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
const networks = input.slice(2).map(row => row.split(' ').map(Number));
const graph = Array.from({length: n + 1}, () => []);
const visited = Array(n + 1).fill(false);
let count = 0;

const dfs = (start) => {
    visited[start] = true;
    count += 1;
    
    for(const computer of graph[start]) {
        if(visited[computer]) continue;
        dfs(computer);
    }
};

for(const [start, end] of networks) {
    graph[start].push(end);
    graph[end].push(start);
}

dfs(1);

console.log(count - 1);