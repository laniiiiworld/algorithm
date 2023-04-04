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
const n = Number(input[0]);
const m = Number(input[1]);
const visited = Array(n + 1).fill(false);
const graph = Array.from({length: n + 1}, () => []);
for(let i = 1; i <= m; i++) {
    const [a, b] = input[i + 1].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

let count = 0;
const queue = new Queue();
queue.enqueue([1, 2]);

while(queue.size()) {
    const [start, cost] = queue.dequeue();
    
    if(visited[start]) continue;
    visited[start] = true;
    count += 1;
    if(cost <= 0) continue;
    
    for(const end of graph[start]) {
        if(visited[end]) continue;
        queue.enqueue([end, cost - 1]);
    }
}

console.log(count - 1);