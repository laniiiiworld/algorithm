function solution(n, cores) {
    let left = 0;
    let right = Math.max(...cores) * n;
    let time = 0;
    let m = 0;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = (mid === 0)? cores.length : cores.reduce((acc, cur) => acc += Math.floor(mid / cur), cores.length);
        
        if(count >= n) {
            right = mid - 1;
            time = mid;
            m = count;
        } else {
            left = mid + 1;
        }
    }
    
    let answer = cores.length;
    while(answer--) {
        if (time % cores[answer] > 0) continue;
        if (m === n) break;
        m--;
    }

    return answer + 1;
}