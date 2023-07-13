class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this._sum = 0;
    }
    size() {
        return this.rear - this.front;
    }
    getSum() {
        return this._sum;
    }
    enqueue(value) {
        this.queue.push(value);
        this.rear += 1;
        this._sum += value;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        this._sum -= value;
        return value;
    }
}

function solution(q1, q2) {
    const queue1 = new Queue();
    const queue2 = new Queue();
    for(const value of q1) queue1.enqueue(value);
    for(const value of q2) queue2.enqueue(value);
    const target = (queue1.getSum() + queue2.getSum()) / 2;
    
    if(target !== Math.floor(target)) return -1;
    
    let count = 0;
    while(count < q1.length * 3) {
        if(queue1.getSum() === queue2.getSum()) return count;
        
        count += 1;
        
        if(queue1.getSum() < queue2.getSum()) {
            queue1.enqueue(queue2.dequeue());
        } else {
            queue2.enqueue(queue1.dequeue());
        }
    }
    
    return -1;
}