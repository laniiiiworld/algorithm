function solution(m, n, puddles) {
    const graph = Array.from({length: n}, () => Array(m).fill(0));
    
    for(const [x, y] of puddles) {
        graph[y - 1][x - 1] = -1;
    }
    
    graph[0][0] = 1;
    for(let row = 1; row < n; row++) {
        if(graph[row][0] === -1) break;
        graph[row][0] = 1;
    }
    for(let col = 1; col < m; col++) {
        if(graph[0][col] === -1) break;
        graph[0][col] = 1;
    }
    
    for(let row = 1; row < n; row++) {
        for(let col = 1; col < m; col++) {
            if(graph[row][col] === -1) continue;
            const up = graph[row - 1][col] === -1? 0 : graph[row - 1][col];
            const left = graph[row][col - 1] === -1? 0 : graph[row][col - 1];
            graph[row][col] = (up + left) % 1_000_000_007;
        }
    }
    
    return graph[n - 1][m - 1];
}