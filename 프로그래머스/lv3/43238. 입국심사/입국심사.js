function solution(n, times) {
    let left = 0;
    let right = Math.max(...times) * n;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((sum, time) => sum += Math.floor(mid/time), 0);
        
        if(sum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}