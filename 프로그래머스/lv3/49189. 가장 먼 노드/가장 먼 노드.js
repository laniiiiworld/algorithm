function solution(n, edge) {
    const distance = Array(n+1).fill(0);
    distance[1] = 1;
    
    const gragh = Array.from({length: n+1}, () => []);
    for(const [start, end] of edge) {
        gragh[start].push(end);
        gragh[end].push(start);
    }
    
    const queue = [1];
    while(queue.length) {
        const current = queue.shift();
        for(const node of gragh[current]) {
            if(distance[node]) continue;
            distance[node] = distance[current] + 1;
            queue.push(node);
        }
    }
    
    const max = Math.max(...distance);
    return distance.filter(value => value === max).length;
}