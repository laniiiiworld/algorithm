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
    const answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const distance = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    const bfs = (x, y, count) => {
        let result = count + Number(maps[y][x]);
        visited[y][x] = true;
        
        for(const [plusX, plusY] of distance) {
            const nextX = x + plusX;
            const nextY = y + plusY;
            if(nextX < 0 || nextY < 0 || nextX === m || nextY === n) continue;
            if(maps[nextY][nextX] === 'X' || visited[nextY][nextX]) continue;
            result = Math.max(result, bfs(nextX, nextY, result));
        }
        
        return result;
    };
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] === 'X' || visited[i][j]) continue;
            answer.push(bfs(j, i, 0));
        }
    }
    
    return answer.length? answer.sort((a, b) => a - b) : [-1];
}