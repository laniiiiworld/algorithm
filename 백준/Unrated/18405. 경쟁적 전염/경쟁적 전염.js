const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const graph = [Array(n + 1).fill(0)];
let line = 1;
for(let i = 0; i < n; i++) {
    graph.push([0, ...input[line + i].split(' ').map(Number)]);
}
let [s, x, y] = input[n + 1].split(' ').map(Number);

let queue = [];
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        if(graph[i][j] === 0) continue;
        queue.push([graph[i][j], i, j]);
    }
}

while(s-- || (s > 0 && graph[x][y] === 0)) {
    const tempQueue = [];
    queue.sort((a, b) => a[0] - b[0]);
    
    while(queue.length) {
        const [virus, nowX, nowY] = queue.shift();
        
        for(const [plusX, plusY] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            const nextX = nowX + plusX;
            const nextY = nowY + plusY;
            if(nextX < 1 || nextY < 1 || nextX > n || nextY > n) continue;
            if(graph[nextX][nextY] > 0) continue;
            graph[nextX][nextY] = virus;
            
            tempQueue.push([virus, nextX, nextY]);
        }
    }
    
    queue = tempQueue;
}

console.log(graph[x][y]);