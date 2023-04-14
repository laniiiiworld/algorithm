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

function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    const queue = new Queue();
    const bfs = () => {
        while(queue.size()) {
            const start = queue.dequeue();

            for(let i = 0; i < n; i++) {
                if(visited[i] || computers[start][i] === 0) continue;
                queue.enqueue(i);
                visited[i] = true;
            }
        }
    };
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        queue.enqueue(i);
        visited[i] = true;
        bfs(queue);
        answer += 1;
    }
    
    return answer;
}