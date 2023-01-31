class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.total = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
        this.total += value;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        this.total -= value;
        return value;
    }
    peek() {
        return this.queue[this.front];
    }
    size() {
        return this.rear - this.front;
    }
    getTrucksWeight() {
        return this.total;
    }
}

function solution(bridge_length, weight, truck_weights) {
    let seconds = 0;
    const times = new Array(truck_weights.length).fill(bridge_length);
    const moveTrucks = (start, end) => {
        for(let i=start; i<=end; i++) {
            times[i] -= 1;
        }
    };
    const bridge = new Queue();
    let i=0;
    
    while(i<truck_weights.length) {
        seconds += 1;
        moveTrucks(i - bridge.size(), i-1);
        if(times[i - bridge.size()] === 0) bridge.dequeue();
        if(bridge.size() === bridge_length) continue;
        if(bridge.getTrucksWeight() + truck_weights[i] > weight) continue;
        bridge.enqueue(truck_weights[i++]);
    }
    
    return seconds + bridge_length;
}