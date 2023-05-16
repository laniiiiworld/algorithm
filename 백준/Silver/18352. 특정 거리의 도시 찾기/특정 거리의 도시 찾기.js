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
const graph = Array.from({length: n + 1}, () => []);
for(let i = 1; i <= m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
}

const answer = [];
const visited = Array(n + 1).fill(false);
const queue = new Queue();

queue.enqueue([x, 0]);
visited[x] = true;

while(queue.size()) {
    const [now, distance] = queue.dequeue();
    
    if(distance === k) {
        answer.push(now);
        continue;
    }
    
    for(const next of graph[now]) {
        if(visited[next]) continue;
        if(distance + 1 > k) continue;
        visited[next] = true;
        queue.enqueue([next, distance + 1]);
    }
}


if(answer.length) {
    console.log(answer.sort((a, b) => a - b).join('\n'));
} else {
    console.log('-1');
}