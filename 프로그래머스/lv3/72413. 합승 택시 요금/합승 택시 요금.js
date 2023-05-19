function solution(n, s, a, b, fares) {
    const graph = Array.from({length: n + 1}, (_, i) => Array.from({length: n + 1}, (_, j) => i === j? 0 : Infinity));
    for(const [c, d, cost] of fares) {
        graph[c][d] = cost;
        graph[d][c] = cost;
    }
    
    for(let k = 1; k <= n; k++) {
        for(let c = 1; c <= n; c++) {
            for(let d = 1; d <= n; d++) {
                const calcCost = graph[c][k] + graph[k][d];
                if(graph[c][d] <= calcCost) continue;
                graph[c][d] = calcCost;
                graph[d][c] = calcCost;
            }
        }
    }
        
    let fare = Infinity;
    for(let k = 1; k <=n ; k++) {
        const calcFare = graph[s][k] + graph[k][a] + graph[k][b];
        fare = Math.min(fare, calcFare);
    }
    
    return fare;
}