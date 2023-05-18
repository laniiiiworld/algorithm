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
        let parentIndex = ~~(currentIndex / 2);
        
        while(parentIndex >= 1 && this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = ~~(currentIndex / 2);
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
        
        while((this.heap[leftIndex][1] < this.heap[currentIndex][1]) || 
              (this.heap[rightIndex][1] < this.heap[currentIndex][1])) {
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
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map(Number);
const graph = Array.from({length: n + 1}, () => []);
for(let i = 1; i <= m; i++) {
    const [a, b, cost] = input[i].split(' ').map(Number);
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
}

const distance = Array.from({length: n + 1}, (_, i) => Array.from({length: k + 1}, () => i === 1? 0 : Infinity));
const heap = new MinHeap();
heap.push([1, 0, k]);

while(heap.size()) {
    const [now, cost, count] = heap.pop();
    
    if(distance[now][count] < cost) continue;
    
    for(const [next, nextCost] of graph[now]) {
        const calcCost = cost + nextCost;
        if(distance[next][count] > calcCost) {
            distance[next][count] = calcCost;
            heap.push([next, calcCost, count]);
        }
        if(count > 0 && distance[next][count - 1] > cost) {
            distance[next][count - 1] = cost;
            heap.push([next, cost, count - 1]);
        }
    }
}

console.log(Math.min(...distance[n]));