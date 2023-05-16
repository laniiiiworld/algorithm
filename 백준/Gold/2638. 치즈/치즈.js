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
const board = input.slice(1).map(row => row.split(' ').map(Number));
const moves = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const isExisted = () => {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 0) continue;
            return true;
        }
    }
    return false;
};

const meltCheeze = () => {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 0) continue;
            board[i][j] = board[i][j] > 2 ? 0 : 1;
        }
    }
};

const findCheeze = (visited) => {
    const queue = new Queue();
    queue.enqueue([0, 0]);
    visited[0][0] = true;
    
    while(queue.size()) {
        const [y, x] = queue.dequeue();
        
        if(board[y][x]) board[y][x] += 1;
        if(board[y][x] > 0) continue;
        
        for(const [plusY, plusX] of moves) {
            const nextY = y + plusY;
            const nextX = x + plusX;
            if(nextY < 0 || nextX < 0 || nextY >= n || nextX >= m) continue;
            if(board[nextY][nextX] === 0 && visited[nextY][nextX]) continue;
            queue.enqueue([nextY, nextX]);
            visited[nextY][nextX] = true;
        }
    }
};

let seconds = 0;
while(isExisted()) {
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    findCheeze(visited);
    meltCheeze();
    
    seconds += 1;
}

console.log(seconds);