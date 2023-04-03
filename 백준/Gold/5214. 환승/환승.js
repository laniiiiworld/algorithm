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
const [n, k, m] = input[0].split(' ').map(Number);
const visited = new Set();
const graph = Array.from({length: n + m + 1}, () => []);
for(let i = 1; i <= m; i++) {
    const arr = input[i].split(' ').map(Number);
    for(const a of arr) {
        graph[a].push(n + i);
        graph[n + i].push(a);
    }
}

let answer = n + m + 1;
const queue = new Queue();
queue.enqueue([1, 1]);

while(queue.size()) {
    const [start, distance] = queue.dequeue();
    
    if(visited.has(start)) continue;
    if(start === n) {
        answer = distance;
        break;
    }
    visited.add(start);
    
    for(const end of graph[start]) {
        if(visited.has(end)) continue;
        queue.enqueue([end, distance + 1]);
    }
}

console.log(answer === n + m + 1? -1 : Math.ceil(answer / 2));