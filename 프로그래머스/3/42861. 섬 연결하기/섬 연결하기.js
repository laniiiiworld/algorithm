class MinHeap {
    constructor() {
        this.heap = [null];
    }
    size() {
        return this.heap.length - 1;
    }
    peek() {
        return this.heap[1];
    }
    push(value) {
        this.heap.push(value);
        
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
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(this.size() === 1) {
            return returnValue;
        } else if(this.size() === 2) {
            if(this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        
        while((this.heap[leftIndex][1] < this.heap[currentIndex][1]) 
              || (this.heap[rightIndex][1] < this.heap[currentIndex][1])) {
            const minIndex = (this.heap[leftIndex][1] <= this.heap[rightIndex][1])? leftIndex : rightIndex;
            this._swap(minIndex, currentIndex);
            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            if(leftIndex >= this.heap.length - 1) break;
        }
        
        return returnValue;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
function solution(n, costs) {
    const graph = Array.from({length: n}, () => []);
    const distance = Array(n).fill(Infinity);
    const bfs = (a) => {
        const connected = new Set();
        const heap = new MinHeap();
        
        distance[a] = 0;
        heap.push([a, 0]);
        
        while(heap.size() && connected.size < n) {
            const [now, nowCost] = heap.pop();
            connected.add(now);
            
            for(const [next, nextCost] of graph[now]) {
                if(connected.has(next)) continue;
                distance[next] = Math.min(distance[next], nextCost);
                heap.push([next, nextCost]);
            }
        }
    };
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for(const [a, b, cost] of costs) {
        graph[a].push([b, cost]);
        graph[b].push([a, cost]);
    }
    
    bfs(costs[0][0]);
    
    return distance.reduce((acc, cur) => acc += cur);
}