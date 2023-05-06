const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = [];
let t = Number(input[0]);
let line = 1;

const dfs = (node, visited, wantedNumbers) => {
    let result = [];
    const stack = [node];
    
    while(stack.length) {
        let now = stack[stack.length - 1];
        const next = wantedNumbers[now];
        
        visited[now] = true;
        
        if(!visited[next]) {
            stack.push(next);
        } else if(stack.includes(next)) {
            if(next === now) {
                result.push(stack.pop());
            }
            while(next !== now) {
                now = stack.pop();
                result.push(now);
            }
        } else {
            stack.pop();
        }
    }
    
    return result.length;
};

while(t--) {
    let result = 0;
    const n = Number(input[line++]);
    const visited = Array(n + 1).fill(false);
    const wantedNumbers = [0, ...input[line++].split(' ').map(Number)];
    
    for(let i = 1; i <= n; i++) {
        if(visited[i]) continue;
        result += dfs(i, visited, wantedNumbers);
    }
    
    answer.push(n - result);
}

console.log(answer.join('\n'));