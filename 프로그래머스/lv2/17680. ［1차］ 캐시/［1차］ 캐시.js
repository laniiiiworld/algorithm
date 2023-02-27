function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
    
    let cache = new Array(cacheSize).fill('');
    let time = 0;
    
    for(let city of cities) {
        city = city.toLowerCase();
        
        if(cache.includes(city)) {
            cache = [city, ...cache.filter(value => value !== city)];
            time += 1;
        } else {
            cache.pop();
            cache = [city, ...cache];
            time += 5;
        }
    }
    
    return time;
}