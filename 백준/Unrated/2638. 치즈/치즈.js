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
const [n, m] = input[0].split(' ').map(Number);
const graph = [];
for(let i = 1; i <= n; i++) {
    graph.push(input[i].split(' ').map(Number));
}

let seconds = 0;
let isExist = true;
while(isExist) {
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const queue = new Queue();
    queue.enqueue([0, 0]);
    
    while(queue.size()) {
        const [y, x] = queue.dequeue();
        
        for(const [plusY, plusX] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            const nextX = x + plusX;
            const nextY = y + plusY;
            if(nextX < 0 || nextY < 0 || nextX >= m || nextY >= n) continue;
            if(visited[nextY][nextX]) continue;
            if(graph[nextY][nextX] >= 1) {
                graph[nextY][nextX] += 1;
            } else {
                queue.enqueue([nextY, nextX]);
                visited[nextY][nextX] = true;
            }
        }
    }
    
    isExist = false;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            const now = graph[i][j];
            if(now >= 3) {
                graph[i][j] = 0;
            } else if(now === 2 || now === 1) {
                graph[i][j] = 1;
                isExist = true;
            }
        }
    }
    
    seconds += 1;
}

console.log(seconds);