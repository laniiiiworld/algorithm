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
    const bfs = (computer) => {
        const queue = new Queue();
        queue.enqueue(computer);
        visited[computer] = true;
        
        while(queue.size()) {
            const now = queue.dequeue();
            
            for(let i = 0; i < n; i++) {
                if(computers[now][i] === 0 || visited[i]) continue;
                visited[now] = true;
                queue.enqueue(i);
            }
        }
    };
    
    for(let i = 0; i < n; i++) {
        if(visited[i]) continue;
        bfs(i);
        answer += 1;
    }
    
    return answer;
}