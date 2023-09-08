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
function solution(n, wires) {
    const bfs = (graph) => {
        let count = 1;
        const visited = Array(n + 1).fill(false);
        const queue = new Queue();
        
        queue.enqueue(1);
        visited[1] = true;
        
        while(queue.size()) {
            const now = queue.dequeue();
            
            for(const next of graph[now]) {
                if(visited[next]) continue;
                visited[next] = true;
                count += 1;
                queue.enqueue(next);
            }
        }
        
        return count;
    };
    let answer = n;
    
    for(let i = 0; i < wires.length; i++) {
        const copyWires = [...wires.slice(0, i), ...wires.slice(i + 1)];
        const graph = Array.from({length: n + 1}, () => []);
        
        for(const [start, end] of copyWires) {
            graph[start].push(end);
            graph[end].push(start);
        }
        
        const connected = bfs(graph);
        const gap = Math.abs(connected - (n - connected));
        
        answer = Math.min(answer, gap);
    }
    
    return answer;
}