class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    peek() {
        return this.heap[1];
    }
    push(value) {
        this.heap.push(value);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex >= 1 && this.heap[parentIndex] < this.heap[currentIndex]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        if(this.heap.length === 1) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = currentIndex * 2 + 1;
        if(!this.heap[leftIndex]) {
            return returnValue;
        } else {
            if(!this.heap[rightIndex]) {
                if(this.heap[leftIndex] > this.heap[currentIndex]) {
                    this._swap(leftIndex, currentIndex);
                }
                return returnValue;
            }
        }
        
        while(
              (this.heap[leftIndex] > this.heap[currentIndex]) || 
              (this.heap[rightIndex] > this.heap[currentIndex])
            ) {
            const maxIndex = this.heap[leftIndex] >= this.heap[rightIndex]? leftIndex : rightIndex;
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
class MinHeap {
    constructor() {
        this.heap = [null];
    }
    peek() {
        return this.heap[1];
    }
    push(value) {
        this.heap.push(value);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex >= 1 && this.heap[parentIndex] > this.heap[currentIndex]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        if(this.heap.length === 1) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = currentIndex * 2 + 1;
        if(!this.heap[leftIndex]) {
            return returnValue;
        } else {
            if(!this.heap[rightIndex]) {
                if(this.heap[leftIndex] < this.heap[currentIndex]) {
                    this._swap(leftIndex, currentIndex);
                }
                return returnValue;
            }
        }
        
        while(
              (this.heap[leftIndex] < this.heap[currentIndex]) || 
              (this.heap[rightIndex] < this.heap[currentIndex])
            ) {
            const minIndex = this.heap[leftIndex] <= this.heap[rightIndex]? leftIndex : rightIndex;
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
function solution(A, B) {
    A.sort((a, b) => b - a);
    
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();
    for(const value of B) {
        maxHeap.push(value);
        minHeap.push(value);
    }
    
    let answer = 0;
    
    for(const value of A) {
        if(maxHeap.peek() <= value) {
            minHeap.pop();
        } else {
            if(minHeap.peek() > value) {
                minHeap.pop();
            } else {
                maxHeap.pop();
            }
            answer += 1;
        }
    }
    
    return answer;
}