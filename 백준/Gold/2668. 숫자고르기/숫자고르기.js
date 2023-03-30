const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const graph = [0, ...input.slice(1).map(Number)];
const visited = Array(n + 1).fill(false);
const result = [];

for(let x = 1; x <= n; x++) {
    if(visited[x]) continue;
    
    const stack = [x];
    while(stack.length) {
        let now = stack[stack.length - 1];
        let next = graph[now];
        
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
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));