function solution(cards) {
    const n = cards.length;
    const visited = Array(n + 1).fill(false);
    const results = [];
    const bfs = (start) => {
        let result = 1;
        const queue = [];
        queue.push([start, 1]);
        visited[start] = true;
        
        while(queue.length) {
            const [now, count] = queue.shift();
            const next = cards[now - 1];
            
            result = Math.max(result, count);
            
            if(visited[next]) continue;
            visited[next] = true;
            
            queue.push([next, count + 1]);
        }
        
        return result;
    };
    
    for(let i = 1; i <= n; i++) {
        if(visited[i]) continue;
        results.push(bfs(i));
    }
    
    results.sort((a, b) => b - a);
    
    return results.length === 1? 0 : results[0] * results[1];
}