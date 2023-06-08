class MinHeap {
    constructor() {
        this.heap = [null];
    }
    size() {
        return this.heap.length - 1;
    }
    push(value) {
        this.heap.push(value);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        if(this.size() === 1) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(this.size() === 1) {
            return returnValue;
        } else if(this.size() === 2) {
            if(this.heap[leftIndex] <= this.heap[currentIndex]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        
        while((this.heap[leftIndex] <= this.heap[currentIndex]) || 
              (this.heap[rightIndex] <= this.heap[currentIndex])) {
            const minIndex = this.heap[leftIndex] <= this.heap[rightIndex]? leftIndex : rightIndex;
            this._swap(minIndex, currentIndex);
            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            if(leftIndex <= this.heap.length - 1) break;
        }
        
        return returnValue;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
function solution(n, roads, sources, destination) {
    const distance = Array(n + 1).fill(Infinity);
    const graph = Array.from({length: n + 1}, () => []);
    const bfs = (start) => {
        const heap = new MinHeap();
        heap.push(start);
        distance[start] = 0;
        
        while(heap.size()) {
            const now = heap.pop();
            
            for(const next of graph[now]) {
                if(distance[next] < distance[now] + 1) continue;
                distance[next] = distance[now] + 1;
                heap.push(next);
            }
        }
    };
    for(const [start, end] of roads) {
        graph[start].push(end);
        graph[end].push(start);
    }
    
    bfs(destination);
    
    return sources.map(v => distance[v] === Infinity? -1 : distance[v]);
}