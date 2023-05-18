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
const board = [];
for(let i = 1; i <= n; i++) {
    const row = input[i].split(' ').map(Number);
    board.push(row);
}
const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];
const openBorder = (visited, row, col) => {
    let peoples = 0;
    const stack = [];
    const queue = new Queue();
    queue.enqueue([row, col]);
    visited[row][col] = true;
    
    while(queue.size()) {
        const [y, x] = queue.dequeue();
        
        for(const [plusY, plusX] of moves) {
            const nextY = y + plusY;
            const nextX = x + plusX;
            if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;
            if(visited[nextY][nextX]) continue;
            
            const diff = Math.abs(board[y][x] - board[nextY][nextX]);
            if(diff < l || diff > r) continue;

            visited[nextY][nextX] = true;
            stack.push([nextY, nextX]);
            queue.enqueue([nextY, nextX]);
            peoples += board[nextY][nextX];
        }
    }
    
    if(stack.length) {
        stack.push([row, col]);
        peoples += board[row][col];
    }
    
    return {peoples: ~~(peoples / stack.length), stack};
};

const movePeoples = (peoples, stack) => {
    while(stack.length) {
        const [y, x] = stack.pop();
        board[y][x] = peoples;
    }
};

let days = 0;
let isMoved = true;

while(isMoved) {
    isMoved = false;
    
    const visited = Array.from({length: n}, () => Array(n).fill(false));
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(visited[i][j]) continue;
            const {peoples, stack} = openBorder(visited, i, j);
            if(stack.length > 0) {
                isMoved = true;
                movePeoples(peoples, stack);
            }
        }
    }
    
    if(isMoved) days += 1;
}

console.log(days);