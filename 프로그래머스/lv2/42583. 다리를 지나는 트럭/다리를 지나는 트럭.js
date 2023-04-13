function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const bridge = [];
    let nextIndex = 0;
    let nowWeight = 0;
    
    while(nextIndex < truck_weights.length) {
        answer += 1;
        bridge.forEach(car => car.time -= 1);
        while(bridge.length && bridge[0].time === 0) {
            const truck = bridge.shift();
            nowWeight -= truck.weight;
        }
        
        if(bridge.length === bridge_length) continue;
        if(nowWeight + truck_weights[nextIndex] > weight) continue;
        
        const truck = {weight: truck_weights[nextIndex++], time: bridge_length};
        bridge.push(truck);
        nowWeight += truck.weight;
    }
    
    return answer + bridge[bridge.length - 1].time;
}