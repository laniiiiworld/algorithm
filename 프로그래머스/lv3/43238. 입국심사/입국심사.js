function solution(n, times) {
    let left = 0;
    let right = Math.max(...times) * n;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        //각 심사관이 mid 시간동안 심사할 수 있는 사람 수를 더한 값
        const count = times.reduce((acc, cur) => acc += Math.floor(mid / cur), 0);
        
        if(count >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}