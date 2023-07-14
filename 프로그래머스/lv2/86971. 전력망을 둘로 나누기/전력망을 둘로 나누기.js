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
    const bfs = (graph) => {
        let result = 0;
        const visited = Array(n + 1).fill(false);
        const queue = new Queue();
        queue.enqueue(1);
        visited[1] = true;
        
        while(queue.size()) {
            const now = queue.dequeue();
            
            result += 1;
            
            for(const next of graph[now]) {
                if(visited[next]) continue;
                queue.enqueue(next);
                visited[next] = true;
            }
        }
        
        return result;
    };
    
    for(let i = 0; i < wires.length; i++) {
        const newWires = [...wires.slice(0, i), ...wires.slice(i + 1)];
        const graph = Array.from({length: n + 1}, () => []);
        for(const [start, end] of newWires) {
            graph[start].push(end);
            graph[end].push(start);
        }
        const network1 = bfs(graph);
        const network2 = n - network1;
        answer = Math.min(answer, Math.abs(network1 - network2));
    }
    
    return answer;
}