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
const [n, k] = input[0].split(' ').map(Number);

let answer = Math.abs(n - k);
const visited = new Set();
const queue = new Queue();
queue.enqueue([n, 0]);

while(queue.size()) {
    const [now, count] = queue.dequeue();
    if(now === k) {
        answer = Math.min(answer, count);
        break;
    }
    
    for(const operate of ['-', '+', '*']) {
        let next = now;
        if(operate === '-') {
            next -= 1;
        } else if(operate === '+') {
            next += 1;
        } else {
            next *= 2;
        }
        
        if(next < 0 || next > 100_000 || visited.has(next)) continue; 
        visited.add(next);
        queue.enqueue([next, count + 1]);
    }
}

console.log(answer);