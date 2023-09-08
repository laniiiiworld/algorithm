class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        return this.rear - this.front;
    }
    enqueue(item) {
        this.queue.push(item);
        this.rear += 1;
    }
    dequeue() {
        const item = this.queue[this.front];
        delete this.queue[this.front++];
        return item;
    }
}

function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    const canMove = (y, x) => (y >= 0 && y <= n && x >= 0 && x <= m) && maps[y][x];
    const bfs = (startY, startX) => {
        const queue = new Queue();
        queue.enqueue([startY, startX, 1]);
        
        while(queue.size()) {
            const [y, x, count] = queue.dequeue();
            
            if(y === n && x === m) {
                return count;
            }
            
            for(const [plusY, plusX] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
                const nextY = y + plusY;
                const nextX = x + plusX;
                if(!canMove(nextY, nextX)) continue;
                maps[nextY][nextX] = 0;
                queue.enqueue([nextY, nextX, count + 1]);
            }
        }
        
        return -1;
    };
    
    return bfs(0, 0);
}