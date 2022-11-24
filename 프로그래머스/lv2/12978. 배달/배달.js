function solution(N, road, K) {
    const distance = new Array(N).fill(0).map((row, idx) => new Array(N).fill(Infinity).map((v, i) => i === idx? 0 : Infinity));
    
    //각 간선에 대한 정보 초기화
    road.forEach(([a,b,c]) => {
        const min = Math.min(a, b) - 1;
        const max = Math.max(a, b) - 1;
        distance[min][max] = Math.min(distance[min][max], c);
        distance[max][min] = Math.min(distance[max][min], c);
        // distance[a-1][b-1] = Math.min(distance[a-1][b-1], c);
    });
    
    //플로이드 워셜 알고리즘 수행
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