function solution(n, times) {
    let left = 0;
    let right = 1_000_000_000 * n;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2); //모든 사람이 심사를 받는데 걸리는 시간
        const count = times.reduce((acc, time) => acc += Math.floor(mid / time), 0); //mid시간동안 심사받은 사람 수
        if(count < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}