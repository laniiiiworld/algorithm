function solution(stones, k) {
    let left = 0;
    let right = 200_000_000;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        let maxCount = 0;
        let count = 0;
        for(const stone of stones) {
            if(stone <= mid) {
                count += 1;
                maxCount = Math.max(maxCount, count);
            } else {
                count = 0;
            }
        }
        
        if(maxCount >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}