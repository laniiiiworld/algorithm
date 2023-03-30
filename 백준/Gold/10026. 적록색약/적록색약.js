const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const standard = {'R': 'R', 'G': 'G', 'B': 'B'};
const special = {'R': 'R', 'G': 'R', 'B': 'B'};

const graph = input.slice(1).map(v => v.split(''));
const dfs = (row, col, target, base, visited) => {
    if(row < 0 || col < 0 || row === n || col === n) return;
    if(visited[row][col]) return;
    if(base[graph[row][col]] !== target) return;
    
    visited[row][col] = true;
    
    dfs(row + 1, col, target, base, visited);
    dfs(row - 1, col, target, base, visited);
    dfs(row, col + 1, target, base, visited);
    dfs(row, col - 1, target, base, visited);
};

let answer = [0, 0];
let testCase = 2;

while(testCase--) {
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    const base = (testCase === 0)? standard : special;
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(visited[i][j]) continue;
            dfs(i, j, base[graph[i][j]], base, visited);
            answer[testCase] += 1;
        }
    }
}

console.log(answer.join(' '));