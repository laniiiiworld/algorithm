const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const baseOperation = ['+', '-', '*', '/'];
const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const visited = Array(n - 1).fill(false); //operation 사용여부
const operations = [''];
let max = -Infinity;
let min = Infinity;

input[2].split(' ').map(Number).forEach((v, i) => {
    for(const o of baseOperation[i].repeat(v)) {
        operations.push(o);
    }
});

const calculateNumbers = (a, b, operation) => {
    if(operation === '+') return a + b;
    if(operation === '-') return a - b;
    if(operation === '*') return a * b;
    return ~~(a / b);
};

const dfs = (depth, result) => {
    if(depth === n) {
        max = Math.max(max, result);
        min = Math.min(min, result);
        return;
    }
    
    for(let i = 1; i < n; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        dfs(depth + 1, calculateNumbers(result, numbers[depth], operations[i]));
        visited[i] = false;
    }
};

dfs(1, numbers[0]);

console.log(max);
console.log(min);