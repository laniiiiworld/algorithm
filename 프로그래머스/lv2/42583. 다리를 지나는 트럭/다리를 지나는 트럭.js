class Queue {
    #sum;
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.#sum = 0;
    }
    get sum() {
        return this.#sum;
    }
    size() {
        return this.rear - this.front;
    }
    enqueue(value) {
        this.queue.push(value);
        this.#sum += value;
        this.rear += 1;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        this.#sum -= value;
        return value;
    }
}

function solution(bridge_length, weight, truck_weights) {
    const bridge = new Queue();
    let seconds = 0;
    let index = 0;
    
    for(let i = 0; i < bridge_length; i++) {
        bridge.enqueue(0);
    }
    
    while(index < truck_weights.length) {
        seconds += 1;
        bridge.dequeue();
        const truck = truck_weights[index];
        if(bridge.sum + truck <= weight) {
            bridge.enqueue(truck);
            index += 1;
        } else {
            bridge.enqueue(0);
        }
    }
    
    return seconds + bridge_length;
}