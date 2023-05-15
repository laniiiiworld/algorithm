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

function solution(storey) {
    let answer = Infinity;
    
    const visited = new Set();
    const queue = new Queue();
    queue.enqueue([storey, 0]);

    while(queue.size()) {
        const [now, count] = queue.dequeue();
        const remainder = now % 10;
        
        if(now === 0) {
            answer = Math.min(answer, count);
            continue;
        }
        
        if(remainder) {
            const next = ~~(now / 10);
            queue.enqueue([next, count + remainder]);
            if(now > 5) queue.enqueue([next + 1, count + 10 - remainder]);
        } else {
            queue.enqueue([now / 10, count]);
        }
    }
    
    return answer;
}