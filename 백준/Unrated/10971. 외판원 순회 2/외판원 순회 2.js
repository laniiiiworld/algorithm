const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const costs = input.slice(1).map(row => row.split(' ').map(Number));
const visited = Array(n).fill(false);
let answer = Infinity;

const dfs = (depth, beforeCost, before) => {
    if(depth === n) {
        if(costs[before][0] === 0) return;
        const cost = beforeCost + costs[before][0];
        answer = cost < answer? cost : answer;
        return;
    }
    
    for(let next = 1; next < n; next++) {
        if(visited[next]|| costs[before][next] === 0) continue;
        visited[next] = true;
        const cost = beforeCost + costs[before][next];
        dfs(depth + 1, cost, next);
        visited[next] = false;
    }
};

visited[0] = true;
dfs(1, 0, 0);

console.log(answer);