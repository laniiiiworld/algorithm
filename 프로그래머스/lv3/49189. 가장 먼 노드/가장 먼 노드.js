function solution(n, vertex) {
    const visited = new Array(n).fill(false);
    const distance = new Array(n).fill(Infinity);
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
        
        vertex.filter(item => item[0] === node || item[1] === node).forEach(([a, b]) => {
            const calcCost = distance[node-1] + 1;
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
    
    const max = Math.max(...distance);
    return distance.filter(v => v === max).length;
}