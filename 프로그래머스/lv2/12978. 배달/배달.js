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
        let parentIndex = ~~(currentIndex / 2);
        
        while(parentIndex >= 1 && this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = ~~(currentIndex / 2);
        }
    }
    pop() {
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnItem = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(!this.heap[leftIndex]) {
            return returnItem;
        } else if(!this.heap[rightIndex]) {
            if(this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while((this.heap[leftIndex][1] < this.heap[currentIndex][1]) || 
              (this.heap[rightIndex][1] < this.heap[currentIndex][1])) {
            const minIndex = (this.heap[leftIndex][1] <= this.heap[rightIndex][1])? leftIndex : rightIndex;
            this._swap(leftIndex, rightIndex);
            
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
    const heap = new MinHeap();
    
    for(const [a, b, c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    
    heap.push([1, 0]);
    
    while(heap.size()) {
        const [now, nowCost] = heap.pop();
        
        if(distance[now] <= nowCost) continue;
        distance[now] = nowCost;
        
        for(const [next, plusCost] of graph[now]) {
            const nextCost = nowCost + plusCost;
            if(distance[next] <= nextCost) continue;
            heap.push([next, nextCost]);
        }
    }
    
    return distance.filter(v => v <= K).length;
}