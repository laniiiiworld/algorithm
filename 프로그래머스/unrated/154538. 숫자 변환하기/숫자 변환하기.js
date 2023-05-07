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

function solution(x, y, n) {
    let answer = Infinity;
    const visited = new Set();
    const queue = new Queue();
    queue.enqueue([x, 0]);
    visited.add(x);
    
    while(queue.size()) {
        const [now, count] = queue.dequeue();
        if(now === y) {
            answer = count;
            break;
        }
                
        for(const next of [now + n, now * 2, now * 3]) {
            if(next > y) continue;
            if(visited.has(next)) continue;
            visited.add(next);
            queue.enqueue([next, count + 1]);
        }
    }
    
    return answer === Infinity? -1 : answer;
}