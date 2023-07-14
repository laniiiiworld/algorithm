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
    const answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const graph = maps.map(row => row.split(''));
    const bfs = (y, x) => {
        let result = 0;
        const canMove = (row, col) => row >= 0 && row < n && col >= 0 && col < m && graph[row][col] !== 'X';
        const queue = new Queue();
        queue.enqueue([y, x]);
        
        while(queue.size()) {
            const [nowY, nowX] = queue.dequeue();
            
            if(graph[nowY][nowX] === 'X') continue;
            result += Number(graph[nowY][nowX]);
            graph[nowY][nowX] = 'X';
                
            for(const [plusY, plusX] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
                const nextY = nowY + plusY;
                const nextX = nowX + plusX;
                if(!canMove(nextY, nextX)) continue;
                queue.enqueue([nextY, nextX]);
            }
        }
        
        return result;
    };
    
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(graph[row][col] === 'X') continue;
            answer.push(bfs(row, col));
        }
    }
    
    return answer.length? answer.sort((a, b) => a - b) : [-1];
}