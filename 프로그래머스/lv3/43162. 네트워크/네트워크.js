//dfs
function solution(n, computers) {
    let count = 0;
    const graph = Array.from({length: n}, () => []);
    const visited = Array(n).fill(false);
    const getNewNetworks = (computer) => {
        visited[computer] = true;
        const connectedComputers = graph[computer];
        while(connectedComputers.length) {
            const next = connectedComputers.pop();
            getNewNetworks(next);
        }
    };
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(i === j || !computers[i][j]) continue;
            if(!graph[i].includes(j)) graph[i].push(j);
            if(!graph[j].includes(i)) graph[j].push(i);
        }
    }
    
    for(let i=0; i<n; i++) {
        if(visited[i]) continue;
        count += 1;
        getNewNetworks(i);
    }
    
    return count;
}