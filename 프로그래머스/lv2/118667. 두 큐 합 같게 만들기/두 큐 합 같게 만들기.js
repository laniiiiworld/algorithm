class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue.push(value);
        this.rear += 1;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        return value;
    }
}
function solution(queue1, queue2) {
    const arr1 = new Queue();
    const arr2 = new Queue();
    
    let sum1 = 0;
    for(const value of queue1) {
        arr1.enqueue(value);
        sum1 += value;
    }
    let sum2 = 0;
    for(const value of queue2) {
        arr2.enqueue(value);
        sum2 += value;
    }
    
    let answer = 0;
    let count = queue1.length * 3;
    while(count--) {
        if(sum1 === sum2) {
            return answer;
        }
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
        answer += 1;
    }
    
    return -1;
}