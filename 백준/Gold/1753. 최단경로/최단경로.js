class MinHeap {
    constructor() {
        this.heap = [null];
    }
    size() {
        return this.heap.length - 1;
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap[this.heap.length - 1];
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
              (this.heap[rightIndex][1] < this.heap[currentIndex][1])
              ) {
            const minIndex = this.heap[leftIndex][1] < this.heap[rightIndex][1] ? leftIndex : rightIndex;
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

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [v, e] = input[0].split(' ').map(Number);
const start = Number(input[1]);
const distance = Array(v + 1).fill(Infinity);
const graph = Array.from({length: v + 1}, () => []);
for(let i = 1; i <= e; i++) {
    const [u, v, w] = input[i + 1].split(' ').map(Number);
    graph[u].push([v, w]);
}

const heap = new MinHeap();
heap.push([start, 0]);

while(heap.size()) {
    const [now, cost] = heap.pop();
    
    if(distance[now] <= cost) continue;
    distance[now] = cost;
    
    for(const [next, plusCost] of graph[now]) {
        const nextCost = cost + plusCost;
        if(distance[next] <= nextCost) continue;
        heap.push([next, nextCost]);
    }
}

let answer = '';
for(let i = 1; i <= v; i++) {
    answer += distance[i] === Infinity? 'INF\n' : `${distance[i]}\n`;
}
console.log(answer);