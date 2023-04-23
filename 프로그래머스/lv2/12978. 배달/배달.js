function solution(N, road, K) {
    const distance = Array.from({length: N}, (_, idx) => {
        return Array.from({length: N}, (v, i) => i === idx? 0 : Infinity);
    });

    road.forEach(([a,b,c]) => {
        distance[a - 1][b - 1] = Math.min(distance[a - 1][b - 1], c);
        distance[b - 1][a - 1] = Math.min(distance[b - 1][a - 1], c);
    });
    
    for(let k=0; k<N; k++) {
        for(let a=0; a<N; a++) {
            for(let b=0; b<N; b++) {
                const calcDistance = distance[a][k] + distance[k][b];
                distance[a][b] = Math.min(distance[a][b], calcDistance);
            }
        }
    }
    
    return distance[0].filter(value => value <= K).length;
}