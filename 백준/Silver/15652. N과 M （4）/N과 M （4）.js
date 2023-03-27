const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const answer = [];
const dfs = (arr, start) => {
    if(arr.length === m) {
        answer.push(arr.join(' '));
        return;
    }
    for(let i = start; i <= n; i++) {
        dfs([...arr, i], i);
    }
};

dfs([], 1);

console.log(answer.join('\n'));