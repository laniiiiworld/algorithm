const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let testCase = parseInt(input[0]);
let line = 1;

function solution(m, n, graph) {
    let count = 0;
    const dfs = (x, y) => {
        if(x < 0 || y < 0 || x >= m || y >= n) return false;
        if(!graph[x][y]) return false;
        
        graph[x][y] = 0;
        
        dfs(x-1, y);
        dfs(x+1, y);
        dfs(x, y-1);
        dfs(x, y+1);
        
        return true;
    };
    
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(!graph[i][j]) continue;
            count += 1;
            dfs(i, j);
        }
    }
    
    return count;
}

while(testCase--) {
    let [m, n, k] = input[line].split(' ').map(Number);
    let graph = Array.from({length: m}, () => new Array(n).fill(0));
    
    for(let i=1; i<=k; i++) {
        let [x, y] = input[line + i].split(' ').map(Number);
        graph[x][y] = 1;
    }
    
    console.log(solution(m, n, graph));
    
    line += k + 1;
}