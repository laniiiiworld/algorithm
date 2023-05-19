class MinHeap {
    constructor() {
        this.heap = [null];
    }
    peek() {
        return this.heap[1] || [null, null];
    }
    size() {
        return this.heap.length - 1;
    }
    push(value) {
        this.heap.push(value);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = ~~(currentIndex / 2);
        
        while(parentIndex >= 1 && (this.heap[currentIndex][0] < this.heap[parentIndex][0])) {
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
            if(this.heap[leftIndex][0] < this.heap[currentIndex][0]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        
        while((this.heap[leftIndex][0] < this.heap[currentIndex][0]) || 
              (this.heap[rightIndex][0] < this.heap[currentIndex][0])) {
            const minIndex = (this.heap[leftIndex][0] <= this.heap[rightIndex][0])? leftIndex : rightIndex;
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
class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    peek() {
        return this.heap[1] || [null, null];
    }
    size() {
        return this.heap.length - 1;
    }
    push(value) {
        this.heap.push(value);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = ~~(currentIndex / 2);
        
        while(parentIndex >= 1 && (this.heap[currentIndex][0] > this.heap[parentIndex][0])) {
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
            if(this.heap[leftIndex][0] > this.heap[currentIndex][0]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        
        while((this.heap[leftIndex][0] > this.heap[currentIndex][0]) || 
              (this.heap[rightIndex][0] > this.heap[currentIndex][0])) {
            const maxIndex = (this.heap[leftIndex][0] >= this.heap[rightIndex][0])? leftIndex : rightIndex;
            this._swap(maxIndex, currentIndex);
            currentIndex = maxIndex;
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
function solution(operations) {
    let count = 0;
    const visited = new Set();
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();
    const deleteValue = (heap, type, checked) => {
        while(heap.size()) {
            const [value, index] = heap.peek();
            if(!visited.has(`${index}${checked}${value}`)) break;
            heap.pop();
        }
        
        if(heap.size() === 0) return;
        
        const [value, index] = heap.pop();
        visited.add(`${index}${type}${value}`);
        count -= 1;
    };
    const peekValue = (heap, type, checked) => {
        while(heap.size()) {
            const [value, index] = heap.peek();
            if(!visited.has(`${index}${checked}${value}`)) break;
            heap.pop();
        }
        
        if(heap.size() === 0) return 0;
        
        return heap.peek()[0];
    };
    
    for(let i = 0; i < operations.length; i++) {
        const [operation, value] = operations[i].split(' ');
        if(operation === 'I') {
            count += 1;
            maxHeap.push([Number(value), i]);
            minHeap.push([Number(value), i]);
        } else {
            if(value === '1') {
                deleteValue(maxHeap, 'MAX', 'MIN');
            } else {
                deleteValue(minHeap, 'MIN', 'MAX');
            }
        }
    }
    
    const max = peekValue(maxHeap, 'MAX', 'MIN');
    const min = peekValue(minHeap, 'MIN', 'MAX');
    if(count === 0) return [0, 0];
    if(count === 1) return [Math.max(max, min), Math.max(max, min)];
    return [max, min];
}