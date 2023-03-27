const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const visited = Array(n + 1).fill(0);
const answer = [];
const dfs = (arr) => {
    if(arr.length === m) {
        answer.push(arr.join(' '));
        return;
    }
    for(let i = 1; i <= n; i++) {
        dfs([...arr, i]);
    }
};

dfs([]);

console.log(answer.join('\n'));