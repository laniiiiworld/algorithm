function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);
        if(n <= count) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}