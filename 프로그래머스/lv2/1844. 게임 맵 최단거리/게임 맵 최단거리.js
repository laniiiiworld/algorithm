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
    const n = maps.length;
    const m = maps[0].length;
    let answer = n * m + 1;
    
    const queue = new Queue();
    queue.enqueue([0, 0, 1]);
    maps[0][0] = 0;
    
    while(queue.size()) {
        const [y, x, count] = queue.dequeue();
        
        if(y === n - 1 && x === m - 1) {
            answer = Math.min(answer, count);
            continue;
        }
        
        for(const [plusY, plusX] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const nextY = y + plusY;
            const nextX = x + plusX;
            if(nextY < 0 || nextX < 0 || nextY === n || nextX === m) continue;
            if(maps[nextY][nextX] === 0) continue;
            maps[nextY][nextX] = 0;
            queue.enqueue([nextY, nextX, count + 1]);
        }
    }
    
    return answer === n * m + 1 ? -1 : answer;
}