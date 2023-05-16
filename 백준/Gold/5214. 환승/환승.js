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
const graph = Array.from({length: n + m + 1}, () => []);
for(let i = 1; i <= m; i++) {
    const connected = input[i].split(' ').map(Number);
    for(const station of connected) {
        graph[station].push(n + i);
    }
    graph[n + i] = connected;
}

let answer = -1;
const visited = new Set();
const queue = new Queue();

queue.enqueue([1, 1]);
visited.add(1);

while(queue.size()) {
    const [now, count] = queue.dequeue();
    
    if(now === n) {
        answer = Math.ceil(count / 2);
        break;
    }
    
    for(const next of graph[now]) {
        if(visited.has(next)) continue;
        queue.enqueue([next, count + 1]);
        visited.add(next);
    }
}

console.log(answer);