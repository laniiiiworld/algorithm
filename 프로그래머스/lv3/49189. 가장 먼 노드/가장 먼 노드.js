function solution(n, edge) {
    const distance = new Array(n+1).fill(0);
    const gragh = Array.from({length: n+1}, () => []);
    edge.forEach(([start, end]) => {
        gragh[start].push(end);
        gragh[end].push(start);
    });
    
    const queue = [1];
    distance[1] = 1;
    
    while(queue.length) {
        const current = queue.shift();
        for(const node of gragh[current]) {
            if(distance[node] > 0) continue;
            distance[node] = distance[current] + 1;
            queue.push(node);
        }
    }
    
    const max = Math.max(...distance);
    return distance.filter(value => value === max).length;
}