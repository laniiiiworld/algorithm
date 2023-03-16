const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const queens = [];
let count = 0;
const dfs = (row) => {
    if(row === n) {
        count += 1;
        return;
    }
    
    for(let col = 0; col < n; col++) {
        if(queens.findIndex(([y, x]) => row === y || col === x || row - y === Math.abs(col - x)) > -1) continue;
        queens.push([row, col]);
        dfs(row + 1);
        queens.pop();
    }
};

dfs(0);

console.log(count);