function solution(tickets) {
    let answer = [];
    const graph = new Map();
    const dfs = (now) => {
        const destinations = graph.get(now) || [];
        while(destinations.length) {
            dfs(destinations.shift());
        }
        answer.push(now);
    };
    
    for(const [start, end] of tickets) {
        const destinations = graph.get(start) || [];
        graph.set(start, [...destinations, end]);
    }
    
    for(const start of graph.keys()) {
        const destinations = graph.get(start) || [];
        graph.set(start, destinations.sort());
    }
    
    dfs('ICN');
    
    return answer.reverse();
}