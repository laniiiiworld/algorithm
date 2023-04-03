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
const [n, m, k, x] = input[0].split(' ').map(Number);
const visited = Array(n + 1).fill(false);
const graph = Array.from({length: n + 1}, () => []);
for(let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
}

const answer = [];
const queue = new Queue();
queue.enqueue([x, 0]);

while(queue.size()) {
    const [start, distance] = queue.dequeue();
    
    if(distance > k) break;
    else if(distance === k && !visited[start]) answer.push(start);
    
    visited[start] = true;
    
    for(const end of graph[start]) {
        if(visited[end]) continue;
        queue.enqueue([end, distance + 1]);
    }
}

console.log(answer.length === 0? -1 : answer.sort((a, b) => a - b).join('\n'));