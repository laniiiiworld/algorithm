class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex >= 1 && this.heap[parentIndex].count < this.heap[currentIndex].count) {
            this._swap(parentIndex, currentIndex);
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
        if(!this.heap[leftIndex]) {
            return returnItem;
        } else {
            if(!this.heap[rightIndex]) {
                if(this.heap[currentIndex].count < this.heap[leftIndex].count) {
                    this._swap(currentIndex, leftIndex);
                }
                return returnItem;
            }
        }
        
        while((leftIndex < this.heap.length - 1) &&
              (
                (this.heap[currentIndex].count < this.heap[leftIndex].count) ||
                (this.heap[currentIndex].count < this.heap[rightIndex].count)
              )) {
            const maxIndex = (this.heap[leftIndex].count < this.heap[rightIndex].count) ? rightIndex : leftIndex;
            this._swap(maxIndex, currentIndex);
            currentIndex = maxIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        
        return returnItem;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}
function solution(k, tangerine) {
    const myMap = new Map();
    const heap = new MaxHeap();
    let answer = 0;

    for(const size of tangerine) {
        const count = myMap.get(size) || 0;
        myMap.set(size, count + 1);
    }
    
    for(const size of myMap.keys()) {
        heap.push({size, count : myMap.get(size)});
    }
    
    while(k > 0) {
        k -= heap.pop().count;
        answer += 1;
    }
    
    return answer;
}