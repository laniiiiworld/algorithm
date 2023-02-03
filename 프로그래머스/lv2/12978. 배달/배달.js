function solution(N, road, K) {
    const distance = Array.from({length: N+1}, (_, idx) => {
                        return Array.from({length: N+1}, (v, i) => i === idx? 0 : Infinity);
                    });

    //각 간선에 대한 정보 초기화
    road.forEach(([start, end, cost]) => {
        const min = Math.min(start, end);
        const max = Math.max(start, end);
        distance[min][max] = Math.min(distance[min][max], cost);
        distance[max][min] = Math.min(distance[max][min], cost);
    });

    //플로이드 워셜 알고리즘
    // start: 출발하는 마을
    // mid: 거쳐가는 마을
    // end: 도착하는 마을
    for(let mid=1; mid<=N; mid++) {
        for(let start=1; start<=N; start++) {
            for(let end=1; end<=N; end++) {
                const calcDistance = distance[start][mid] + distance[mid][end];
                distance[start][end] = Math.min(distance[start][end], calcDistance);
            }
        }
    }
    
    return distance[1].filter(value => value <= K).length;
}