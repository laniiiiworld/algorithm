function solution(stones, k) {
    let left = 0;
    let right = 200_000_000;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        for(const stone of stones) {
            if(count === k) break;
            if(stone > mid) count = 0;
            else count += 1;
        }
        
        if(count < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}