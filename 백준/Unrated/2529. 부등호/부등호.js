const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const visited = Array(10).fill(false);
const n = Number(input[0]);
const operations = input[1].split(' ');
let max = '0';
let min = 'Infinity';
const isTrue = (operation, a, b) => {
    if(operation === '') return true;
    if(operation === '<') return a < b;
    return a > b;
};
const dfs = (index, operation, a, b, number) => {
    if(!isTrue(operation, a, b)) return;
    if(index === n - 1) {
        if(Number(max) < Number(number)) max = number;
        if(Number(min) > Number(number)) min = number;
        return;
    }

    for(let i = 0; i < 10; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        dfs(index + 1, operations[index + 1], b, i, `${number}${i}`);
        visited[i] = false;
    }
};

for(let i = 0; i < 10; i++) {
    visited[i] = true;
    dfs(-1, '', -1, i, `${i}`);
    visited[i] = false;
}

console.log(`${max}\n${min}`);