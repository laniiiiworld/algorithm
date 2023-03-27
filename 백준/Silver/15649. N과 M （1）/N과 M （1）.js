const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const answer = [];
const visited = Array(n+1).fill(false);

function dfs(arr) {
    if(arr.length === m) {
        answer.push(arr.join(' '));
        return;
    }
    for(let i=1; i<=n; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        dfs([...arr, i]);
        visited[i] = false;
    }
}

dfs([]);

console.log(answer.join('\n'));