class MinHeap {
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

        while(parentIndex && this.heap[currentIndex] < this.heap[parentIndex]) {
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
            if(this.heap[leftIndex] < this.heap[currentIndex]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        
        while((this.heap[leftIndex] < this.heap[currentIndex]) || 
              (this.heap[rightIndex] < this.heap[currentIndex])) {
            const minIndex = (this.heap[leftIndex] <= this.heap[rightIndex])? leftIndex : rightIndex;
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

function solution(book_time) {
    const getMinute = (time) => {
        const [hh24, mm] = time.split(':').map(Number);
        return hh24 * 60 + mm;
    };
    const bookedList = book_time
                        .map(([start, end]) => [getMinute(start), getMinute(end)])
                        .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const heap = new MinHeap();
    
    for(const [checkIn, checkOut] of bookedList) {
        if(heap.size() && heap.peek() <= checkIn) {
            heap.pop();
        }
        
        heap.push(checkOut + 10);
    }
    
    return heap.size();
}