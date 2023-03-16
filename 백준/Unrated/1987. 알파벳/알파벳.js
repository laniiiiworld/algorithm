const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(items => items.split(''));
const letters = new Set();
let answer = 0;
const dfs = (row, col, count) => {
    if(row < 0 || col < 0 || row === n || col === m) {
        answer = (answer < count)? count : answer;
        return;
    }
    
    const letter = graph[row][col];
    if(letters.has(letter)) {
        answer = (answer < count)? count : answer;
        return;
    }
    
    letters.add(letter);
    
    dfs(row + 1, col, count + 1);
    dfs(row - 1, col, count + 1);
    dfs(row, col + 1, count + 1);
    dfs(row, col - 1, count + 1);
    
    letters.delete(letter);
};

dfs(0, 0, 0);

console.log(answer);