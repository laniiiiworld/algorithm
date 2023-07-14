function  solution(tickets) {
    const answer = [];
    const graph = new Map();
    const dfs = (start) => {
        const destinations = graph.get(start) || [];
        
        while(destinations.length) {
            dfs(destinations.pop());
        }
        
        answer.push(start);
    };
    
    for(const [start, end] of tickets) {
        const destinations = graph.get(start) || [];
        graph.set(start, [...destinations, end]);
    }
    
    for(const start of graph.keys()) {
        const destinations = graph.get(start).sort().reverse();
        graph.set(start, destinations);
    }
    
    dfs('ICN');
    
    return answer.reverse();
}