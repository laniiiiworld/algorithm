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
        
        while(parentIndex >= 1 && this.heap[currentIndex][2] < this.heap[parentIndex][2]) {
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
            if(this.heap[leftIndex][2] < this.heap[currentIndex][2]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while(
              (this.heap[leftIndex][2] < this.heap[currentIndex][2]) ||
              (this.heap[rightIndex][2] < this.heap[currentIndex][2])
             ) {
            const minIndex = this.heap[leftIndex][2] <= this.heap[rightIndex][2]? leftIndex : rightIndex;
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

function solution(n, costs) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    const heap = new MinHeap();    
    for(const [a, b, cost] of costs) {
        heap.push([a, b, cost]);
    }
    
    const [a, b, cost] = heap.pop();
    visited[a] = true;
    visited[b] = true;
    answer += cost;
    
    while(visited.includes(false)) {
        const stack = [];
        while(heap.size()) {
            const [start, end, cost] = heap.pop();

            if((!visited[start] && visited[end]) || (visited[start] && !visited[end])) {
                visited[start] = true;
                visited[end] = true;

                answer += cost;
                break;
            } else {
                stack.push([start, end, cost]);
            }
        }
        
        while(stack.length) {
            heap.push(stack.pop());
        }
    }
    
    return answer;
}