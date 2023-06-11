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
    const n = board.length;
    const m = board[0].length;
    const moves = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    const visited = new Set();
    let [startY, startX] = [0, 0];

    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(board[row][col] === 'R') {
                [startY, startX] = [row, col];
                break;
            }
        }
    }
    const isMoved = (nowY, nowX, nextY, nextX) => {
        if(nowY === nextY && (nextX < 0 || nextX === m)) return true;
        if(nowX === nextX && (nextY < 0 || nextY === n)) return true;
        return false;
    };
    const bfs = () => {
        const queue = new Queue();
        queue.enqueue([startY, startX, 0]);

        while(queue.size()) {
            const [nowY, nowX, count] = queue.dequeue();

            if(board[nowY][nowX] === 'G') {
                return count;
            }
            visited.add(`${String(nowY).padStart(3, '0')}${String(nowX).padStart(3, '0')}`);

            for(const [plusY, plusX] of moves) {
                let nextY = nowY;
                let nextX = nowX;

                while(true) {
                    nextY += plusY;
                    nextX += plusX;
                    //벽이나 장애물을 만나지 못한 경우 계속 이동
                    if(isMoved(nowY, nowX, nextY, nextX) || board[nextY][nextX] === 'D') {
                        nextY -= plusY;
                        nextX -= plusX;
                        break;
                    }
                }

                if(visited.has(`${String(nextY).padStart(3, '0')}${String(nextX).padStart(3, '0')}`)) continue;
                queue.enqueue([nextY, nextX, count + 1]);
            }
        }

        return -1;
    };

    return bfs();
}