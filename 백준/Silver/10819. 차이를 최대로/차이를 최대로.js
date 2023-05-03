const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const visited = Array(n).fill(false);
let answer = 0;

const calculateAnswer = (numbers) => {
    let result = 0;
    for(let i = 1; i < n; i++) {
        result += Math.abs(numbers[i] - numbers[i - 1]);
    }
    return result;
};

const dfs = (numbers) => {
    if(numbers.length === n) {
        answer = Math.max(answer, calculateAnswer(numbers));
        return;
    }
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        visited[i] = true;
        numbers.push(arr[i]);
        dfs(numbers);
        numbers.pop();
        visited[i] = false;
    }
};

dfs([]);

console.log(answer);