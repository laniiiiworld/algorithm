function solution(n, s, a, b, fares) {
    const graph = Array.from({length: n + 1}, (_, i) => {
        return Array.from({length: n + 1}, (_, j) => (i === j)? 0 : Infinity);
    });
    
    for(const [c, d, f] of fares) {
        graph[c][d] = f;
        graph[d][c] = f;
    }
    
    for(let mid = 1; mid <= n; mid++) {
        for(let start = 1; start <= n; start++) {
            for(let end = 1; end <= n; end++) {
                const calcFee = graph[start][mid] + graph[mid][end];
                if(graph[start][end] <= calcFee) continue;
                graph[start][end] = calcFee;
            }
        }
    }
    
    let fee = graph[s][a] + graph[s][b];
    for(let share = 1; share <= n; share++) {
        const calcFee = graph[s][share] + graph[share][a] + graph[share][b];
        if(fee <= calcFee) continue;
        fee = calcFee;
    }
    
    return fee;
}