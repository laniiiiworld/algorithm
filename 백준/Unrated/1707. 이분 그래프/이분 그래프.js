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
let k = Number(input[0]);
let line = 1;
const bfs = (x, graph, visited) => {
    const queue = new Queue();
    
    queue.enqueue(x);
    visited[x] = 0;
    
    while(queue.size()) {
        x = queue.dequeue();
        for(const y of graph[x]) {
            if(visited[y] > -1) continue;
            visited[y] = Number(!visited[x]);
            queue.enqueue(y);
        }
    }
};
const isTrue = (graph, visited) => {
    for(let x = 1; x < visited.length; x++) {
        for(const y of graph[x]) {
            if(visited[x] === visited[y]) return 'NO';
        }
    }
    return 'YES';
};

while(k--) {
    const [v, e] = input[line].split(' ').map(Number);
    const graph = Array.from({length: v + 1}, () => []);
    const visited = Array(v + 1).fill(-1);
    
    for(let i = 1; i <= e; i++) {
        const [a, b] = input[line + i].split(' ').map(Number);
        graph[a].push(b);
        graph[b].push(a);
    }
    
    for(let i = 1; i <= v; i++) {
        if(visited[i] > -1) continue;
        bfs(i, graph, visited);
    }
    
    console.log(isTrue(graph, visited));
    
    line += e + 1;
}