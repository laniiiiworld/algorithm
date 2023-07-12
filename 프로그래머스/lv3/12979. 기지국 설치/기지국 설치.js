function solution(n, stations, w) {
    let count = 0;
    let now = 1;
    
    for(const value of stations) {
        if(now < value - w) {
            count += Math.ceil((value - w - now) / (w * 2 + 1));
        }
        now = value + w + 1;
    }
    
    if(now <= n) {
        count += Math.ceil((n + 1 - now) / (w * 2 + 1));
    }
    
    return count;
}