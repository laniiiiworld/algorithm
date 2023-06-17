function solution(stones, k) {
    const getCount = (limit) => {
        let result = 0;
        for(const stone of stones) {
            if(result >= k) break;
            if(stone > limit) {
                result = 0;
                continue;
            }
            result += 1;
        }
        return result;
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