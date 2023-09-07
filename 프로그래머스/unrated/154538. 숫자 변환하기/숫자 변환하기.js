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
function solution(x, y, n) {
    const visited = new Set();
    const bfs = (start) => {
        const queue = new Queue();
        queue.enqueue([start, 0]);
        visited.add(start);
        
        while(queue.size()) {
            const [now, count] = queue.dequeue();
            
            for(const next of [now + n, now * 2, now * 3]) {
                if(next === y) return count + 1;
                if(next > y) break;
                if(visited.has(next)) continue;
                visited.add(next);
                queue.enqueue([next, count + 1]);
            }
        }
        
        return -1;
    };
    
    return x === y? 0 : bfs(x);
}