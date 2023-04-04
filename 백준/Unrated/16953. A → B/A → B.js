class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        return this.rear - this.front;
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

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);

let answer = -1;
const queue = new Queue();
queue.enqueue([a, 1]);

while(queue.size()) {
    const [current, count] = queue.dequeue();
    
    if(current === b) {
        answer = count;
        break;
    }
    
    if(current * 2 <= b) queue.enqueue([current * 2, count + 1]);
    if(Number(`${current}1`) <= b) queue.enqueue([Number(`${current}1`), count + 1]);
}

console.log(answer);