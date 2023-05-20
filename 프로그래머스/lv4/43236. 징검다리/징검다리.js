function solution(distance, rocks, n) {
    rocks.push(0);
    rocks.push(distance);
    rocks.sort((a, b) => a - b);
    
    const getRemoveRocks = (mid) => {
        let count = 0;
        let start = 0;
        let end = 1;
        while(end < rocks.length) {
            while(end < rocks.length && rocks[end] - rocks[start] < mid) {
                count += 1;
                end += 1;
            }
            if(count > n) break;
            start = end;
            end = start + 1;
        }
        return count;
    };
    
    let left = 0;
    let right = distance;
    
    while(left <= right) {
        const mid = ~~((left + right) / 2); //예상하는 최솟값 중 최댓값
        const count = getRemoveRocks(mid);
        
        if(n >= count) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
}