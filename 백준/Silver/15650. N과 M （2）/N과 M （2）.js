const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const visited = Array(n + 1).fill(0);
const answer = [];
const dfs = (arr, k) => {
    if(arr.length === m) {
        answer.push(arr.join(' '));
        return;
    }
    for(let i = k; i <= n; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        dfs([...arr, i], i+1);
        visited[i] = false;
    }
};

dfs([], 1);

console.log(answer.join('\n'));