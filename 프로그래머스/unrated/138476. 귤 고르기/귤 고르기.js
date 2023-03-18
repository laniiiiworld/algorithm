class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(currentIndex > 1 && this.heap[currentIndex][1] > this.heap[parentIndex][1]) {
            this._swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        if(this.heap.length < 2) return 0;
        if(this.heap.length === 2) return this.heap.pop()[1];
        
        const returnValue = this.heap[1][1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = currentIndex * 2;
        let rightIndex = (currentIndex * 2) + 1;
        
        if(!this.heap[leftIndex]) return returnValue;
        else if(!this.heap[rightIndex]) {
            if(this.heap[leftIndex][1] > this.heap[currentIndex][1]) {
                this._swap(currentIndex, leftIndex);
            }
            return returnValue;
        }
        
        while(
                (this.heap[currentIndex][1] < this.heap[leftIndex][1]) || 
                (this.heap[currentIndex][1] < this.heap[rightIndex][1])
            ) {
            const maxIndex = (this.heap[leftIndex][1] > this.heap[rightIndex][1])? leftIndex : rightIndex;
            this._swap(currentIndex, maxIndex);
            
            currentIndex = maxIndex;
            leftIndex = currentIndex * 2;
            rightIndex = (currentIndex * 2) + 1;
            
            if(leftIndex >= this.heap.length - 1) break;
        }
        
        return returnValue;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
function solution(k, tangerine) {
    const heap = new MaxHeap();
    const myMap = new Map();
    
    for(const v of tangerine) {
        const count = myMap.get(v) || 0;
        myMap.set(v, count + 1);
    }
    
    for(const key of myMap.keys()) {
        heap.push([key, myMap.get(key)]);
    }
    
    let count = 0;
    while(k > 0) {
        k -= heap.pop();
        count += 1;
    }
    
    return count;
}