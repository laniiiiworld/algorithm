function solution(n, wires) {
    let answer = n;
    const getNewNetwork = (graph, start, visited) => {
        const queue = [start];
        visited[start] = true;
        
        while(queue.length) {
            const value = queue.shift();
            for(const i of graph[value]) {
                if(visited[i]) continue;
                queue.push(i);
                visited[i] = true;
            }
        }
        
        return visited.filter(value => value === true).length;
    };
    
    for(let i=0; i<wires.length; i++) {
        const graph = Array.from({length: n+1}, () => []);
        const visited = Array(n+1).fill(false);
        const copyWires = [...wires.slice(0, i), ...wires.slice(i+1)];
        for(const [start, end] of copyWires) {
            graph[start].push(end);
            graph[end].push(start);
        }
        const count = getNewNetwork(graph, copyWires[0][0], visited);
        answer = Math.min(answer, Math.abs(count - (n - count)));
    }
    
    return answer;
}