function solution(tickets) {
    const answer = [];
    const cities = new Map();
    const makeCourse = (city) => {
        const destinations = cities.get(city) || [];
        while(destinations && destinations.length) {
            makeCourse(destinations.shift());
        }
        answer.push(city);
    };
    
    for(const [start, end] of tickets) {
        const destinations = cities.get(start) || [];
        cities.set(start, [...destinations, end]);
    }
    
    for(const start of cities.keys()) {
        cities.set(start, cities.get(start).sort());
    }
    
    makeCourse('ICN');
    
    return answer.reverse();
}