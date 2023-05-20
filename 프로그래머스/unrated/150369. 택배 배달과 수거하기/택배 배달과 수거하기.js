function solution(cap, n, deliveries, pickups) {
    const deliveryBoxes = () => {
        let count = cap;
        let length = 0;
        while(deliveries.length && count >= 0) {
            length = Math.max(length, deliveries.length);
            count -= deliveries.pop();
        }
        if(count < 0) {
            deliveries.push(-1 * count);
        }
        return count === cap? 0 : length;
    };
    const pickupBoxes = () => {
        let count = 0;
        let length = 0;
        while(pickups.length && count <= cap) {
            length = Math.max(length, pickups.length);
            count += pickups.pop();
        }
        if(count > cap) {
            pickups.push(count - cap);
        }
        return count? length : 0;
    };
    
    let answer = 0;
    
    while(deliveries.length || pickups.length) {
        answer += Math.max(deliveryBoxes(), pickupBoxes()) * 2;
    }
    
    return answer;
}