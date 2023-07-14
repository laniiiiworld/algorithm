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
function solution(n, edge) {
    const distance = Array(n + 1).fill(Infinity);
    const graph = Array.from({length: n + 1}, () => []);
    const bfs = (start) => {
        const queue = new Queue();
        queue.enqueue([start, 0]);
        distance[start] = 0;
        
        while(queue.size()) {
            const [now, count] = queue.dequeue();
            
            for(const next of graph[now]) {
                const calcDistance = count + 1;
                if(distance[next] <= calcDistance) continue;
                distance[next] = calcDistance;
                queue.enqueue([next, calcDistance]);
            }
        }
    };
    
    for(const [start, end] of edge) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    distance[0] = 0;
    bfs(1);
    
    const max = Math.max(...distance);
    return distance.filter(v => v === max).length;
}