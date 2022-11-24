function solution(N, road, K) {
    const visited = new Array(N).fill(false);
    const distance = new Array(N).fill(Infinity);
    distance[0] = 0;
    
    const getSmallestNode = () => {
        let minCost = Infinity;
        let node = -1;
        for(let i=0; i<distance.length; i++) {
            if(visited[i] || distance[i] >= minCost) continue;
            minCost = distance[i];
            node = i+1;
        }
        return node;
    };
    
    while(visited.findIndex(value => !value) > -1){
        const node = getSmallestNode();
        
        visited[node-1] = true;
        
        road.filter(item => item[0] === node || item[1] === node).forEach(([a, b, c]) => {
            const calcCost = distance[node-1] + c;
            if(a === node) {
                if(calcCost < distance[b-1]) {
                    distance[b-1] = calcCost;
                }
            } else {
                if(calcCost < distance[a-1]) {
                    distance[a-1] = calcCost;
                }
            }
        });
    }
    
    return distance.filter(value => value <= K).length;
}