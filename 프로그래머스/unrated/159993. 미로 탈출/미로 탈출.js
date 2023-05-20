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

function solution(maps) {
    const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const n = maps.length;
    const m = maps[0].length;
    const getStartPoint = (point) => {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(maps[i][j] === point) return [i, j];
            }
        }
    };
    const bfs = (row, col, end) => {
        const visited = Array.from({length: n}, () => Array(m).fill(false));
        let result = n * m + 1;
        const queue = new Queue();
        queue.enqueue([row, col, 0]);
        
        while(queue.size()) {
            const [y, x, count] = queue.dequeue();
            if(maps[y][x] === end) {
                result = Math.min(result, count);
                continue;
            }
            for(const [plusY, plusX] of moves) {
                const nextY = y + plusY;
                const nextX = x + plusX;
                if(nextX < 0 || nextY < 0 || nextX >= m || nextY >= n) continue;
                if(maps[nextY][nextX] === 'X' || visited[nextY][nextX]) continue;
                visited[nextY][nextX] = true;
                queue.enqueue([nextY, nextX, count + 1]);
            }
        }
        
        return result === n * m + 1? 0 : result;
    };
    
    let answer = 0;
    for(const [start, end] of [['S', 'L'], ['L', 'E']]){
        const [row, col] = getStartPoint(start);
        const seconds = bfs(row, col, end);
        
        if(seconds === 0) return -1;
        
        answer += seconds;
    }
    return answer;
}