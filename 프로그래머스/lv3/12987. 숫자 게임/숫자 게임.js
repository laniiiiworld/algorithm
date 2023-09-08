class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        return this.rear - this.front;
    }
    push(item) {
        this.queue.push(item);
        this.rear += 1;
    }
    shift() {
        const item = this.queue[this.front];
        delete this.queue[this.front++];
        return item;
    }
    pop() {
        this.rear -= 1;
        return this.queue.pop();
    }
    peekFront() {
        return this.queue[this.front];
    }
    peekRear() {
        return this.queue[this.rear - 1];
    }
}
function solution(A, B) {
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
    
    const queue = new Queue();
    for(const value of B) {
        queue.push(value);
    }
    
    let answer = 0;
    for(const value of A) {
        if(value < queue.peekRear()) {
            queue.pop();
            answer += 1;
        } else {
            queue.shift();
        }
    }
    
    return answer;
}