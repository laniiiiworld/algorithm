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
const moved = [
                [2, 1],
                [1, 2],
                [-1, 2],
                [-2, 1],
                [-2, -1],
                [-1, -2],
                [1, -2],
                [2, -1],
              ];
let t = Number(input[0]);
let line = 1;

while(t--) {
    const l = Number(input[line]);
    const now = input[line + 1].split(' ').map(Number);
    const target = input[line + 2].split(' ').map(Number);
    const visited = Array.from({length: l}, () => Array(l).fill(false));
    const queue = new Queue();
    let answer = l * l;
    
    queue.enqueue({current: now, count: 0});
    visited[now[0]][now[1]] = true;
    
    while(queue.size()) {
        const {current, count} = queue.dequeue();
        const [row, col] = current;
        
        if(row === target[0] && col === target[1]) {
            answer = count;
            break;
        }
        
        for(const [movedY, movedX] of moved) {
            const x = col + movedX;
            const y = row + movedY;
            if(x < 0 || y < 0 || x >= l || y >= l) continue;
            if(visited[y][x]) continue;
            
            visited[y][x] = true;
            queue.enqueue({current: [y, x], count: count + 1});
        }
    }
    
    console.log(answer);
    line += 3;
}