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
let line = 0;
const n = Number(input[line++]);
const k = Number(input[line++]);
const board = Array.from({length: n + 1}, () => Array(n + 1).fill(0));
for(let i = 0; i < k; i++) {
    const [row, col] = input[i + line].split(' ').map(Number);
    board[row][col] = 1; //apple
}
line += k;
const l = Number(input[line++]);
const directionInfo = [];
for(let i = 0; i < l; i++) {
    const [seconds, direction] = input[i + line].split(' ');
    directionInfo.push([Number(seconds), direction]);
}

let time = 0;
const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let directionIndex = 0;
let infoIndex = 0;
const snake = new Queue();
snake.enqueue([1, 1]);
board[1][1] = 2; //snake
let [snakeHeadY, snakeHeadX] = [1, 1];

while(true) {
    if(infoIndex < l && directionInfo[infoIndex][0] === time) {
        let [seconds, direction] = directionInfo[infoIndex];

        if(direction === 'D') directionIndex = (directionIndex + 1) % 4;
        else directionIndex = (directionIndex + 3) % 4;
        
        infoIndex += 1;
    }
    
    time += 1;
    
    snakeHeadY += directions[directionIndex][0];
    snakeHeadX += directions[directionIndex][1];
    
    if(snakeHeadX <= 0 || snakeHeadY <= 0 || snakeHeadX > n || snakeHeadY > n) {
        break;
    }
    
    const before = board[snakeHeadY][snakeHeadX];
    if(before === 2) {
        break;
    }
    
    board[snakeHeadY][snakeHeadX] = 2;
    snake.enqueue([snakeHeadY, snakeHeadX]);
    
    if(before === 0) {
        const [snakeTailY, snakeTailX] = snake.dequeue();
        board[snakeTailY][snakeTailX] = 0;
    }
}

console.log(time);