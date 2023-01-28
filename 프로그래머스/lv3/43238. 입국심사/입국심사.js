function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        //mid 시간동안 심사받을 수 있는 입국자 수의 합
        const sum = times.reduce((sum, time) => sum += Math.floor(mid/time), 0);
        
        if(sum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}