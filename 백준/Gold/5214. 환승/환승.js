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
for(let tube = 1; tube <= m; tube++) {
    const connected = input[tube].split(' ').map(Number);
    for(const station of connected) {
        graph[n + tube].push(station);
        graph[station].push(n + tube);
    }
}

let answer = n + m + 1;
const visited = new Set();
const queue = new Queue();
queue.enqueue([1, 1]);
visited.add(1);

while(queue.size()) {
    const [start, count] = queue.dequeue();
    
    if(start === n) {
        answer = Math.min(answer, count);
    }
    
    for(const end of graph[start]) {
        if(visited.has(end)) continue;
        visited.add(end);
        queue.enqueue([end, count + 1]);
    }
}

console.log(answer === n + m + 1? -1 : Math.ceil(answer / 2));