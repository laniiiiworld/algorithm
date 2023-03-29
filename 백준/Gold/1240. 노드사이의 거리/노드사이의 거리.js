const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0].split(' ').map(Number)[0];
const graph = Array.from({length: n + 1}, () => []);
const answer = [];

function solution(start, end) {
    let result = 0;
    const visited = Array(n+1).fill(false);
    const dfs = (node, cost) => {
        visited[node] = true;
        if(node === end) {
            result = cost;
            return;
        }
        
        for(const [nextNode, nextNodeCost] of graph[node]) {
            if(visited[nextNode]) continue;
            dfs(nextNode, cost + nextNodeCost);
        }
    };
    
    dfs(start, 0);
    
    return result;
}

for(let i = 1; i < n; i++) {
    const [start, end, cost] = input[i].split(' ').map(Number);
    graph[start].push([end, cost]);
    graph[end].push([start, cost]);
}

for(let i = n; i < input.length; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    answer.push(solution(start, end));
}

console.log(answer.join('\n'));