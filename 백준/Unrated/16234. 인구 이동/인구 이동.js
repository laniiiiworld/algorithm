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
const [n, l, r] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(row => row.split(' ').map(Number));
let day = 0;

const bfs = (x, y, uniteNumber, visited) => {
    let unitePopulation = graph[y][x];
    const uniteCountries = [[y, x]];
    const queue = new Queue();
    queue.enqueue([y, x]);
    visited[y][x] = uniteNumber;

    while(queue.size()) {
        const [y, x] = queue.dequeue();
        
        for(const [plusX, plusY] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
            const nextX = x + plusX;
            const nextY = y + plusY;
            
            if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;
            if(visited[nextY][nextX] > -1) continue;
            
            const gap = Math.abs(graph[nextY][nextX] - graph[y][x]);
            if(l > gap || gap > r) continue;
            
            visited[nextY][nextX] = uniteNumber;
            queue.enqueue([nextY, nextX]);
            uniteCountries.push([nextY, nextX]);
            unitePopulation += graph[nextY][nextX];
        }
    }
    
    const population = Math.floor(unitePopulation / uniteCountries.length);
    for(const [y, x] of uniteCountries) {
        graph[y][x] = population;
    }
};

while(true) {
    const visited = Array.from({length: n}, () => Array(n).fill(-1));
    let uniteNumber = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(visited[i][j] > -1) continue;
            bfs(j, i, uniteNumber, visited);
            uniteNumber += 1;
        }
    }
    
    if(uniteNumber === n * n) break;
    
    day += 1;
}

console.log(day);