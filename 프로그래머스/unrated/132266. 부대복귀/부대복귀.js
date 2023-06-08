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
        
        distance[start] = 0;
        queue.enqueue(start);

        while(queue.size()) {
            const now = queue.dequeue();

            for(const next of graph[now]) {
                if(distance[next] < distance[now] + 1) continue;
                distance[next] = distance[now] + 1;
                queue.enqueue(next);
            }
        }
    };
    
    //인접 리스트 만들기
    for(const [start, end] of roads) {
        graph[start].push(end);
        graph[end].push(start);
    }

    //강철부대에서 각 지역으로 이동하는 시간 계산
    bfs(destination);
    
    //각 부대원이 강철부대로 복귀할 수 있는 최단시간
    return sources.map(v => distance[v] === Infinity? -1 : distance[v]);
}