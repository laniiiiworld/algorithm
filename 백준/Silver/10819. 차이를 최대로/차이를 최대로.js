const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);
let answer = 0;
const visited = Array(n).fill(false);
const dfs = (current, sum, arr) => {
    if(arr.length === n) {
        if(sum > answer) {
            answer = sum;
        }
        return;
    }
    
    visited[current] = true;
    
    for(let next=0; next<n; next++) {
        if(visited[next]) continue;
        dfs(next, sum + Math.abs(numbers[current] - numbers[next]), [...arr, numbers[next]]);
    }
    
    visited[current] = false;
};

for(let current=0; current<n; current++) {
    for(let index in visited) visited[index] = false;
    dfs(current, 0, [numbers[current]]);
}

console.log(answer);