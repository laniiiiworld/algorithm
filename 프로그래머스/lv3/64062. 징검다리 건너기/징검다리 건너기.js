function solution(stones, k) {
    const getCount = (target) => {
        let count = 0;
        for(const stone of stones) {
            if(count >= k) break;
            if(stone > target) {
                count = 0;
                continue;
            }
            count += 1;
        }
        return count;
    };
    
    let left = 0;
    let right = 200_000_000;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const count = getCount(mid);
        
        if(count < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}