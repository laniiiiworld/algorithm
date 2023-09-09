function solution(n, s, a, b, fares) {
    const graph = Array.from({length: n + 1}, (_, i) => Array.from({length: n + 1}, (_, j) => (i === j)? 0 : Infinity));
    
    for(const [start, end, fee] of fares) {
        graph[start][end] = fee;
        graph[end][start] = fee;
    }
    
    for(let k = 1; k <= n; k++) {
        for(let i = 1; i <= n; i++) {
            for(let j = 1; j <= n; j++) {
                const calculated = graph[i][k] + graph[k][j];
                if(graph[i][j] <= calculated) continue;
                graph[i][j] = calculated;
            }
        }
    }
    
    let answer = Infinity;
    for(let mid = 1; mid <= n; mid++) {
        const calculated = graph[s][mid] + graph[mid][a] + graph[mid][b];
        if(answer <= calculated) continue;
        answer = calculated;
    }
    return answer;
}