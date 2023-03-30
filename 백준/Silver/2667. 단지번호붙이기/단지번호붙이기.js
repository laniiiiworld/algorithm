const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const graph = input.slice(1).map(row => row.split('').map(Number));

let answer = [];
let count = 0;
const dfs = (row, col) => {
    if(graph[row][col] === 0) return;
    
    graph[row][col] = 0;
    count += 1;
    
    if(row + 1 < n) dfs(row + 1, col);
    if(row - 1 >= 0) dfs(row - 1, col);
    if(col + 1 < n) dfs(row, col + 1);
    if(col - 1 >= 0) dfs(row, col - 1);
};

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        if(graph[i][j] === 0) continue;
        count = 0;
        dfs(i, j);
        answer.push(count);
    }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));