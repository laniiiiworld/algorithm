class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.tail = 0;
    }
    enqueue(value) {
        this.queue.push(value);
        this.tail += 1;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        return value;
    }
    size() {
        return this.tail - this.front;
    }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [s, t] = input[0].split(' ').map(Number);

const bfs = (s, t) => {
    let result = '';
    
    const operations = ['*', '+', '-', '/'];
    const visited = new Set();
    const queue = new Queue();
    
    queue.enqueue({s, expression: ''});
    while(queue.size()) {
        const {s, expression} = queue.dequeue();
        
        if(s === t) {
            result = expression;
            break;
        }
        
        for(let i = 0; i < operations.length; i++) {
            const next = [s*s, s+s, s-s, s/s][i];
            if(next < 1 || next > 1_000_000_000 || visited.has(next)) continue;
            visited.add(next);
            queue.enqueue({s: next, expression: `${expression}${operations[i]}`});
        }
    }
    
    return result;
};

if(s === t) {
    console.log(0);
} else {
    const answer = bfs(s, t);
    console.log(answer === ''? -1 : answer);
}