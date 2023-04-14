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
const graph = Array.from({length: n + 1}, () => []);
for(let i = 2; i <= m + 1; i++) {
    const [start, end] = input[i].split(' ').map(Number);
    graph[start].push(end);
    graph[end].push(start);
}

let answer = 0;
const visited = Array(n + 1).fill(false);
const queue = new Queue();
queue.enqueue([1, 0]);
visited[1] = true;

while(queue.size()) {
    const [start, count] = queue.dequeue();
    
    if(count > 2) break;
    if(count <= 2) {
        answer += 1;
    }
    
    for(const end of graph[start]) {
        if(visited[end]) continue;
        visited[end] = true;
        queue.enqueue([end, count + 1]);
    }
}

console.log(answer - 1);