function solution(n, stations, w) {
    if(stations[stations.length - 1] + w < n) {
        stations.push(n + w + 1);
    }

    const size = 2 * w + 1;
    let before = - w;
    
    return stations.reduce((sum, cur) => {
        const difference = (cur - w) - (before + w + 1);
        before = cur;
        if(difference < 0) return sum;       
        return sum += Math.ceil(difference / size);
    }, 0);
}