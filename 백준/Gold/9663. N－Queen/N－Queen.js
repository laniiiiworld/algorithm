const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const queens = [];
let count = 0;

const isExisted = (row, col) => {
    if(queens.findIndex(([y, x]) => {
        return y === row || x === col || row - y === Math.abs(col - x);
    }) > -1) return true;
    
    return false;
};

const dfs = (row) => {
    if(row === n) {
        count += 1;
        return;
    }
    for(let col = 0; col < n; col++) {
        if(isExisted(row, col)) continue;
        queens.push([row, col]);
        dfs(row + 1);
        queens.pop();
    }
};

dfs(0);

console.log(count);