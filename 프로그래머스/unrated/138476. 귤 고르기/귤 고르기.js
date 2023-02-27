class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(currentIndex > 1 && this.heap[parentIndex].count < this.heap[currentIndex].count) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        if(this.heap.length === 1) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnItem = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = currentIndex * 2 + 1;
        
        if(!this.heap[leftIndex]) return returnItem;
        if(!this.heap[rightIndex]) {
            if(this.heap[currentIndex].count < this.heap[leftIndex].count) {
                this._swap(currentIndex, leftIndex);
            }
            return returnItem;
        }
        
        while(
              (this.heap[currentIndex].count < this.heap[leftIndex].count) || 
              (this.heap[currentIndex].count < this.heap[rightIndex]?.count)
             ) {
            const maxIndex = (this.heap[leftIndex].count < this.heap[rightIndex]?.count)? rightIndex : leftIndex;
            this._swap(currentIndex, maxIndex);
            
            currentIndex = maxIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            
            if(leftIndex >= this.heap.length) break;
        }
        return returnItem;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

function solution(k, tangerine) {
    const sizes = new Map();
    const heap = new MaxHeap();
    
    for(const size of tangerine) {
        sizes.set(size, sizes.get(size) + 1 || 1);
    }
    
    for(const size of sizes.keys()) {
        heap.push({size, count: sizes.get(size)});
    }
    
    let answer = 0;
    let count = 0;
    while(count < k) {
        count += heap.pop().count;
        answer += 1;
    }
    
    return answer;
}