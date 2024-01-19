function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const bfs = (startY, startX) => {
        const visited = new Set();
        const queue = [[startY, startX]];
        
        let result = 1;
        land[startY][startX] = 0;
        visited.add(startX);
        
        while(queue.length) {
            const [nowY, nowX] = queue.shift();
            
            for(const [plusY, plusX] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
                const nextY = nowY + plusY;
                const nextX = nowX + plusX;
                
                if(nextY < 0 || nextX < 0 || nextY >= n || nextX >= m) continue;
                if(land[nextY][nextX] === 0) continue;
                
                result += 1;
                land[nextY][nextX] = 0;
                visited.add(nextX);
                
                queue.push([nextY, nextX]);
            }
        }
        
        return {result, visited};
    };
    
    const oilCounts = Array(m).fill(0);
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(land[row][col] === 0) continue;
            
            const {result, visited} = bfs(row, col);
            
            for(const value of visited) {
                oilCounts[value] += result;
            }
        }
    }
    
    return Math.max(...oilCounts);
}