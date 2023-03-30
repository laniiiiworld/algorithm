const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let t = Number(input[0]);
let line = 1;

while(t--) {
    const n = Number(input[line]);
    const graph = [0, ...input[line + 1].split(' ').map(Number)];
    const visited = Array(n + 1).fill(false);
    const result = [];
    const stack = [];
    for(let x = 1; x <= n; x++) {
        if(visited[x]) continue;
        
        stack.push(x);
        
        while(stack.length) {
            let now = stack[stack.length - 1];
            visited[now] = true;
            
            const next = graph[now];
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
    
    console.log(n - result.length);
    line += 2;
}