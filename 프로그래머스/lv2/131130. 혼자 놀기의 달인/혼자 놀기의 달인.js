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
function solution(cards) {
    const answer = [];
    const n = cards.length;
    const visited = Array(n + 1).fill(false);
    const bfs = (start) => {
        let result = 0;
        const queue = new Queue();
        queue.enqueue(start);
        visited[start] = true;
        
        while(queue.size()) {
            const now = queue.dequeue();
            const next = cards[now - 1];
            
            result += 1;
            
            if(visited[next]) break;
            visited[next] = true;
            
            queue.enqueue(next);
        }
        
        return result;
    };
    
    for(let i = 1; i <= n; i++) {
        if(visited[i]) continue;
        answer.push(bfs(cards[i - 1]));
    }
    
    if(answer.length === 1) return 0;
    
    answer.sort((a, b) => b - a);
    
    return answer[0] * answer[1];
}