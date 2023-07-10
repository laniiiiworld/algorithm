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
        const returnItem = this.queue[this.front];
        delete this.queue[this.front++];
        return returnItem;
    }
}
function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const canBeMoved = (row, col) => (row >= 0 && row <= n && col >= 0 && col <= m) && maps[row][col];
    const bfs = (startY, startX) => {
        const queue = new Queue();
        queue.enqueue([startY, startX, 1]);
        
        while(queue.size()) {
            const [nowY, nowX, count] = queue.dequeue();
            
            if(maps[nowY][nowX] === 0) continue;
            if(nowY === n && nowX === m) {
                return count;
            }
            maps[nowY][nowX] = 0;
            
            for(const [plusY, plusX] of directions) {
                const nextX = nowX + plusX;
                const nextY = nowY + plusY;
                if(!canBeMoved(nextY, nextX)) continue;
                queue.enqueue([nextY, nextX, count + 1]);
            }
        }
        
        return -1;
    };
    
    return bfs(0, 0);
}