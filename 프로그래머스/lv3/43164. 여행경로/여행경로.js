function solution(tickets) {
    const answer = [];
    const cities = new Map();
    const dfs = (city) => {
        const destinations = cities.get(city) || [];
        while(destinations.length) {
            const next = destinations.pop();
            dfs(next);
        }
        answer.push(city);
    };
    
    for(const [start, end] of tickets) {
        const destinations = cities.get(start) || [];
        cities.set(start, [...destinations, end]);
    }
    
    for(const city of cities.keys()) {
        cities.set(city, cities.get(city).sort().reverse());
    }
    
    dfs('ICN');
    
    return answer.reverse();
}