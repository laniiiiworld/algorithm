function solution(tickets) {
    const answer = [];
    const cities = new Map();
    const dfs = (start) => {
        const destinations = cities.get(start) || [];
        while(destinations.length) {
            const end = destinations.shift();
            cities.set(start, destinations);
            dfs(end);
        }
        answer.push(start);
    };
    
    for(const [start, end] of tickets) {
        const destinations = cities.get(start) || [];
        cities.set(start, [...destinations, end]);
    }
    
    for(const start of cities.keys()) {
        const destinations = cities.get(start);
        cities.set(start, destinations.sort());
    }
    
    dfs('ICN');
    
    return answer.reverse();
}