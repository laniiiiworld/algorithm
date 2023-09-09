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
function solution(n, edge) {
    const distance = Array(n + 1).fill(0);
    const graph = Array.from({length: n + 1}, () => []);
    const bfs = (start) => {
        const queue = new Queue();
        queue.enqueue(start);
        distance[1] = 1;
        
        while(queue.size()) {
            const now = queue.dequeue();
            
            for(const next of graph[now]) {
                if(distance[next]) continue;
                distance[next] = distance[now] + 1;
                queue.enqueue(next);
            }
        }
    };
    
    for(const [start, end] of edge) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    bfs(1);
    
    const maxDistance = Math.max(...distance);
    
    return distance.filter(v => v === maxDistance).length;
}