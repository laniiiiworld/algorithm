function solution(stones, k) {
    let left = 0;
    let right = 200_000_000;
    
    while(left <= right) {
        const mid = parseInt((left + right) / 2);
        let count = 0;
        for(const stone of stones) {
            if(stone <= mid) {
                count += 1;
            } else {
                count = 0;
            }
            if(count === k) break;
        }
        
        if(count < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}