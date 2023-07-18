function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    const getBoxes = (k, arr) => {
        let count = k;
        let length = 0;
        
        while(arr.length && count >= 0) {
            length = Math.max(length, arr.length);
            count -= arr.pop();
        }
        
        if(count < 0) {
            arr.push(-1 * count);
        }
        
        return count === k? 0 : length;
    };
    
    while(deliveries.length || pickups.length) {
        const a = getBoxes(cap, deliveries);
        const b = getBoxes(cap, pickups);
        answer += Math.max(a, b) * 2;
    }
    
    return answer;
}