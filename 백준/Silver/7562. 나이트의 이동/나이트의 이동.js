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
const coordinates = [
                     [2, 1], [1, 2], [-1, 2], [-2, 1], 
                     [-2, -1], [-1, -2], [1, -2], [2, -1]
                    ];
const bfs = (l, startY, startX, endY, endX) => {
    let result = 0;
    const visited = Array.from({length: l}, () => Array(l).fill(false));
    const queue = new Queue();
    queue.enqueue([startY, startX, 0]);
    visited[startY][startX] = true;
    
    while(queue.size()) {
        const [y, x, count] = queue.dequeue();
        
        if(y === endY && x === endX) {
            result = count;
            break;
        }

        for(const [plusY, plusX] of coordinates) {
            const nextX = x + plusX;
            const nextY = y + plusY;
            if(nextX < 0 || nextY < 0 || nextX >= l || nextY >= l) continue;
            if(visited[nextY][nextX]) continue;
            visited[nextY][nextX] = true;
            queue.enqueue([nextY, nextX, count + 1]);
        }
    }
    
    return result;
};
    

let answer = [];
let t = Number(input[0]);
let line = 1;

while(t--) {
    const l = Number(input[line]);
    const [startY, startX] = input[line + 1].split(' ').map(Number);
    const [endY, endX] = input[line + 2].split(' ').map(Number);
    
    answer.push(bfs(l, startY, startX, endY, endX));
    
    line += 3;
}

console.log(answer.join('\n'));