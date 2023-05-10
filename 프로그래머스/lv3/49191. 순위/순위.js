function solution(n, results) {
    const graph = Array.from({length: n}, () => Array(n).fill(0));
    for(const [won, lost] of results) {
        graph[won - 1][lost - 1] = 1;
        graph[lost - 1][won - 1] = -1;
    }
    
    for(let k = 0; k < n; k++) {
        for(let a = 0; a < n; a++) {
            for(let b = 0; b < n; b++) {
                if(a === b || graph[a][b] !== 0) continue;
                if(graph[a][k] === 1 && graph[k][b] === 1) {
                    graph[a][b] = 1;
                    graph[b][a] = -1;
                } else if(graph[a][k] === -1 && graph[k][b] === -1) {
                    graph[b][a] = 1;
                    graph[a][b] = -1;
                }
            }
        }
    }
    
    return graph.filter(row => row.filter(v => !v).length === 1).length;
}