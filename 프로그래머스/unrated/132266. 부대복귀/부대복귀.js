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
function solution(n, roads, sources, destination) {
    const distance = Array(n + 1).fill(Infinity);
    const graph = Array.from({length: n + 1}, () => []);
    const bfs = (start) => {
        const queue = new Queue();
        queue.enqueue([start, 0]);
        distance[start] = 0;
        
        while(queue.size()) {
            const [now, nowCost] = queue.dequeue();
            
            for(const next of graph[now]) {
                const calcCost = nowCost + 1;
                if(distance[next] <= calcCost) continue;
                distance[next] = calcCost;
                queue.enqueue([next, calcCost]);
            }
        }
    };
    
    for(const [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    bfs(destination);
    
    return sources.map(v => distance[v] === Infinity? -1 : distance[v]);
}