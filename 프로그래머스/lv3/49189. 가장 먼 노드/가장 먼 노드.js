function solution(n, edge) {
    const answer = Array(n+1).fill(0);
    const visited = Array(n+1).fill(false);
    const gragh = Array.from({length: n+1}, () => []);
    edge.forEach(([start, end]) => {
        gragh[start].push(end);
        gragh[end].push(start);
    });
    
    const queue = [1];
    visited[1] = true;
    
    while(queue.length) {
        const current = queue.shift();        
        
        for(const node of gragh[current]) {
            if(visited[node]) continue;
            visited[node] = true;
            queue.push(node);
            answer[node] = answer[current] + 1;
        }
    }
    const max = Math.max(...answer);
    return answer.filter(value => value === max).length;
}