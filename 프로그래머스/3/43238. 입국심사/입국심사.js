function solution(n, times) {
    const getCount = (mid) => {
        let count = 0;
        for(const time of times) {
            count += Math.floor(mid / time);
            if(count >= n) return count;
        }
        return count;
    };
    let left = 0;
    let right = Math.max(...times) * n;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = getCount(mid);
        if(count >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}