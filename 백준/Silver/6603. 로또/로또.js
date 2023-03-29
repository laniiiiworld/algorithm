const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let line = 0;

while(input[line] !== '0') {
    const numbers = input[line].split(' ').map(Number);
    const k = numbers[0];
    const answer = [];
    const visited = Array(k).fill(false);
    
    const dfs = (arr, start) => {
        if(arr.length === 6) {
            answer.push(arr.join(' '));
            return;
        }
        for(let i = start; i <= k; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            dfs([...arr, numbers[i]], i + 1);
            visited[i] = false;
        }
    };
    
    dfs([], 1);
    
    console.log(answer.join('\n'));
    console.log();
    
    line += 1;
}