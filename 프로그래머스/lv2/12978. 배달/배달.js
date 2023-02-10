function solution(N, road, K) {
    const distance = Array.from({length: N+1}, () => Array(N+1).fill(Infinity));

    //각 간선에 대한 정보 초기화
    for(const [start, end, cost] of road) {
        const minCost = Math.min(distance[start][end], cost);
        distance[start][end] = minCost;
        distance[end][start] = minCost;
    }
    
    //플로이드 워셜 알고리즘
    // start: 출발하는 마을
    // mid: 거쳐가는 마을
    // end: 도착하는 마을
    for(let mid=1; mid<=N; mid++) {
        for(let start=1; start<=N; start++) {
            for(let end=1; end<=N; end++) {
                if(start === end) {
                    distance[start][end] = 0;
                    continue;
                }
                const calcDistance = distance[start][mid] + distance[mid][end];
                distance[start][end] = Math.min(distance[start][end], calcDistance);
            }
        }
    }
    
    return distance[1].filter(value => value <= K).length;
}