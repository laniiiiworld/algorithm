const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
const operations = ['+', '-', '*', '/'];
const usedOperations = [];
input[2].split(' ').forEach((count, index) => {
    usedOperations.push(...operations[index].repeat(Number(count)).split(''));
});

let maxAnswer = -Infinity;
let minAnswer = Infinity;
const visited = Array(usedOperations.length).fill(false);
const calculate = (operation, a, b) => {
    if(operation === '') return a;
    if(operation === '+') return a + b;
    if(operation === '-') return a - b;
    if(operation === '*') return a * b;
    return ~~(a / b);
};
const dfs = (operation, a, b, index) => {
    a = calculate(operation, a, b);
    if(index === numbers.length) {
        if(maxAnswer < a) maxAnswer = a;
        if(a < minAnswer) minAnswer = a;
        return;
    }
    for(let i=0; i<usedOperations.length; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        dfs(usedOperations[i], a, numbers[index], index + 1);
        visited[i] = false;
    }
};

dfs('', numbers[0], 0, 1);

console.log(`${maxAnswer}\n${minAnswer}`);