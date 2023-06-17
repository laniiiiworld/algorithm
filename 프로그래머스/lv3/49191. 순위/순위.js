function solution(n, results) {
    const graph = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
    
    for(const [a, b] of results) {
        graph[a][b] = 1;
        graph[b][a] = -1;
    }
    
    for(let k = 1; k <= n; k++) {
        for(let a = 1; a <= n; a++) {
            for(let b = 1; b <= n; b++) {
                if(graph[a][k] === 1 && graph[k][b] === 1) {
                    graph[a][b] = 1;
                } else if(graph[a][k] === -1 && graph[k][b] === -1) {
                    graph[a][b] = -1;
                }
            }
        }
    }
    
    return graph.filter(row => row.filter(v => !v).length === 2).length;
}