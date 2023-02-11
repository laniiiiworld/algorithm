function solution(tickets) {
    const answer = [];
    const cities = new Map();
    const makeCourse = (start) => {
        const destinations = cities.get(start);
        while(destinations && destinations.length) {
              makeCourse(destinations.shift());
        }
        answer.push(start);
    };
    
    for(const [start, end] of tickets) {
        const destinations = cities.get(start) || [];
        cities.set(start, [...destinations, end]);
    }
    
    for(const city of cities.keys()) {
        cities.set(city, cities.get(city).sort());
    }
    
    makeCourse('ICN');
    
    return answer.reverse();
}