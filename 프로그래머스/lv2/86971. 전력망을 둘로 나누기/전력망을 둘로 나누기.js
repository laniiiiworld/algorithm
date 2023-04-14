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

function solution(n, wires) {
    let answer = n;
    const bfs = (start, wires) => {
        let result = 0;
        const visited = Array(n + 1).fill(false);
        const graph = Array.from({length: n + 1}, () => []);
        for(const [v1, v2] of wires) {
            graph[v1].push(v2);
            graph[v2].push(v1);
        }
        
        const queue = new Queue();
        queue.enqueue(start);
        
        while(queue.size()) {
            const now = queue.dequeue();
            
            if(visited[now]) continue;
            visited[now] = true;
            
            result += 1;
            
            for(const end of graph[now]) {
                if(visited[end]) continue;
                queue.enqueue(end);
            }
        }
        
        return result;
    };
    
    for(let i = 0; i < wires.length; i++) {
        const newWires = [...wires.slice(0, i), ...wires.slice(i + 1)];
        const count = bfs(1, newWires);
        const gap = Math.abs(count - (n - count));
        answer = Math.min(answer, gap);
    }
    
    return answer;
}