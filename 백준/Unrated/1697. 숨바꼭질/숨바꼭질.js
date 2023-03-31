class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.tail = 0;
    }
    enqueue(value) {
        this.queue.push(value);
        this.tail += 1;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        return value;
    }
    size() {
        return this.tail - this.front;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const MAX = 100_000;
const [n, k] = input[0].split(' ').map(Number);
const visited = new Set();
const queue = new Queue();
let answer = Math.abs(n - k);

queue.enqueue([n, 0]);

while(queue.size()) {
    const [now, count] = queue.dequeue();
    visited.add(now);
    
    if(now === k) {
        answer = count < answer ? count : answer;
        break;
    }
    for(const next of [now - 1, now + 1, now * 2]) {
        if(next < 0 || next > MAX) continue;
        if(visited.has(next)) continue;
        queue.enqueue([next, count + 1]);
    }
}

console.log(answer);