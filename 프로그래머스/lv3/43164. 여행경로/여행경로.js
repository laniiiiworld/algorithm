function solution(tickets) {
    const answer = [];
    const graph = new Map();
    const dfs = (start) => {
        const destinations = graph.get(start) || [];
        while(destinations.length) {
            dfs(destinations.shift());
        }
        answer.push(start);
    };
    
    for(const [start, end] of tickets) {
        const destinations = graph.get(start) || [];
        destinations.push(end);
        graph.set(start, destinations);
    }
    
    for(const start of graph.keys()) {
        const destinations = graph.get(start) || [];
        graph.set(start, destinations.sort());
    }
    
    dfs('ICN');
    
    return answer.reverse();
}