class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = -1;
    }
    enqueue(value) {
        this.queue.push(value);
        this.rear += 1;
    }
    dequeue() {
        const returnValue = this.queue[this.front];
        delete this.queue[this.front++];
        return returnValue;
    }
}
function solution(queue1, queue2) {
    const arr1 = new Queue();
    const arr2 = new Queue();
    let sum1 = 0;
    let sum2 = 0;
    for(const v of queue1) {
        arr1.enqueue(v);
        sum1 += v;
    }
    for(const v of queue2) {
        arr2.enqueue(v);
        sum2 += v;
    }
    
    let count = 0;
    while(count < (queue1.length * 3)) {
        if(sum1 === sum2) return count;
        
        if(sum1 < sum2) {
            const value = arr2.dequeue();
            arr1.enqueue(value);
            sum1 += value;
            sum2 -= value;
        } else {
            const value = arr1.dequeue();
            arr2.enqueue(value);
            sum1 -= value;
            sum2 += value;
        }
        
        count += 1;
    }
    
    return -1;
}