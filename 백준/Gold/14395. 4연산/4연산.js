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
const MAX = Math.max(a, b);
const getNextNumber = (x, operation) => {
    if(operation === '*') return x * x;
    if(operation === '+') return x + x;
    if(operation === '-') return x - x;
    return x === 0? 0 : x / x;
};

if(a === b) {
    console.log('0');
} else {
    let answer = '';
    
    const visited = new Set();
    const queue = new Queue();
    queue.enqueue([a, '']);
    visited.add(a);
    
    while(queue.size()) {
        const [now, operations] = queue.dequeue();
        
        if(now === b) {
            answer = operations;
            break;
        }
        
        for(const operation of ['*', '+', '-', '/']) {
            const next = getNextNumber(now, operation);
            if(next < 1 || next > MAX || visited.has(next)) continue;
            visited.add(next);
            queue.enqueue([next, `${operations}${operation}`]);
        }
    }
    
    console.log(answer === ''? '-1' : answer);
}