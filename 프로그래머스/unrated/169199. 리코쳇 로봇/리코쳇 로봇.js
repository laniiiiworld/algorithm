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
function solution(board) {
    let [startY, startX] = [0, 0];
    let [endY, endX] = [0, 0];
    const n = board.length;
    const m = board[0].length;
    const directions = {UP: [-1, 0], DOWN: [1, 0], LEFT: [0, -1], RIGHT: [0, 1]};
    const canMove = (y, x, direction) => {
        if(direction === 'UP' && y - 1 < 0) return false;
        if(direction === 'DOWN' && y + 1 >= n) return false;
        if(direction === 'LEFT' && x - 1 < 0) return false;
        if(direction === 'RIGHT' && x + 1 >= m) return false;
        return true;
    };
    const move = (y, x, direction) => {
        const [plusY, plusX] = directions[direction];
        while(true) {
            const nextY = y + plusY;
            const nextX = x + plusX;
            if(nextY < 0 || nextY >= n || nextX < 0 || nextX >= m) break;
            if(board[nextY][nextX] === 'D') break;
            [y, x] = [nextY, nextX];
        }
        return [y, x];
    };
    const bfs = () => {
        const visited = new Set();
        const queue = new Queue();
        queue.enqueue([startY, startX, 0]);
        visited.add(`${startY} ${startX}`);
        
        while(queue.size()) {
            const [nowY, nowX, count] = queue.dequeue();
            
            if(nowY === endY && nowX === endX) return count;
            
            for(const direction of ['UP', 'DOWN', 'LEFT', 'RIGHT']) {
                if(!canMove(nowY, nowX, direction)) continue;
                const [nextY, nextX] = move(nowY, nowX, direction);
                if(visited.has(`${nextY} ${nextX}`)) continue;
                visited.add(`${nextY} ${nextX}`);
                queue.enqueue([nextY, nextX, count + 1]);
            }
        }
        
        return -1;
    };
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 'R') {
                [startY, startX] = [i, j];
            } else if(board[i][j] === 'G') {
                [endY, endX] = [i, j];
            }
        }
    }
    
    return bfs();
}