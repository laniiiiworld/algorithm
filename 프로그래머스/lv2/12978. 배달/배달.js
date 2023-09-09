class MinHeap {
    constructor() {
        this.heap = [null];
    }
    size() {
        return this.heap.length - 1;
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex && this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        if(this.size() === 1) return this.heap.pop();
        
        const returnItem = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(this.size() === 1) {
            return returnItem;
        } else if(this.size() === 2) {
            if(this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while((this.heap[leftIndex][1] < this.heap[currentIndex][1]) || 
              (this.heap[rightIndex][1] < this.heap[currentIndex][1])) {
            const minIndex = (this.heap[leftIndex][1] <= this.heap[rightIndex][1])? leftIndex : rightIndex;
            this._swap(minIndex, currentIndex);
            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            
            if(leftIndex >= this.heap.length - 1) break;
        }
        
        return returnItem;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

function solution(N, road, K) {
    const distance = Array(N + 1).fill(Infinity);
    const graph = Array.from({length: N + 1}, () => []);
    const bfs = (start) => {
        const heap = new MinHeap();
        distance[start] = 0;
        heap.push([start, 0]);
        
        while(heap.size()) {
            const [now, cost] = heap.pop();
            
            for(const [next, nextCost] of graph[now]) {
                const calculated = cost + nextCost;
                if(distance[next] < calculated) continue;
                distance[next] = calculated;
                heap.push([next, calculated]);
            }
        }
    };
    
    for(const [start, end, cost] of road) {
        graph[start].push([end, cost]);
        graph[end].push([start, cost]);
    }
    
    bfs(1);
    
    return distance.filter(v => v <= K).length;
}