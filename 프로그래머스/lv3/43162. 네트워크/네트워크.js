function solution(n, computers) {
    const connected = Array.from({length: n}, () => []);
    const visited = Array(n).fill(false);
    const bfs = (start) => {
        const queue = [start];
        visited[start] = true;
        
        while(queue.length) {
            const now = queue.shift();
            for(const next of connected[now]) {
                if(visited[next]) continue;
                visited[next] = true;
                queue.push(next);
            }
        }
    };
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(computers[i][j] === 0 || i === j) continue;
            connected[i].push(j);
        }
    }
    
    let answer = 0;
    for(let computer = 0; computer < n; computer++) {
        if(visited[computer]) continue;
        answer += 1;
        bfs(computer);
    }
    
    return answer;
}