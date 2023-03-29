const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let testCase = 1;
let  line = 0;

function solution(n, graph) {
    let count = 0;
    const visited = new Array(n+1).fill(false);
    const isCycle = (x, prev) => {
        visited[x] = true;
        for(let y of graph[x]) {
            if(!visited[y]) {
                if(isCycle(y, x)) return true;
            } else if(y !== prev) {
                return true;
            }
        }
        return false;
    };
    
    for(let i=1; i<=n; i++) {
        if(visited[i] || isCycle(i, 0)) continue;
        count += 1;
    }
    
    return count;
}

function getPrintMessage(count) {
    if(count === 0) return `Case ${testCase}: No trees.`;
    if(count === 1) return `Case ${testCase}: There is one tree.`;
    return `Case ${testCase}: A forest of ${count} trees.`;
}

while(true) {
    const [n, m] = input[line].split(' ').map(Number);
    
    if(n === 0 && m === 0) break;
    
    const graph = Array.from({length: n+1}, () => []);
    input.slice(line+1, line+m+1).forEach(value => {
        const [x, y] = value.split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    });
    const count = solution(n, graph);
    console.log(getPrintMessage(count));
    
    line += m + 1;
    testCase += 1;
}