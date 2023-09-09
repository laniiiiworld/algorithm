function solution(n, times) {
    let left = 0;
    let right = n * Math.max(...times);
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = times.reduce((acc, cur) => acc += Math.floor(mid / cur), 0);
        if(count < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}