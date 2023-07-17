class MaxHeap {
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
        
        while(parentIndex && this.heap[currentIndex] > this.heap[parentIndex]) {
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
            if(this.heap[leftIndex] > this.heap[currentIndex]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        
        while((this.heap[leftIndex] > this.heap[currentIndex]) || 
              (this.heap[rightIndex] > this.heap[currentIndex])) {
            const maxIndex = (this.heap[leftIndex] >= this.heap[rightIndex]) ? leftIndex : rightIndex;
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
function solution(n, k, enemy) {
    const killed = new MaxHeap();
    
    for(let round = 0; round < enemy.length; round++) {
        const value = enemy[round];
        killed.push(value);
        n -= value;
        
        if(n >= 0) continue;
        if(k === 0) return round;
        
        n += killed.pop();
        k -= 1;
    }
    
    return enemy.length;
}