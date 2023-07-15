class MinHeap {
    constructor() {
        this.heap = [null];
    }
    size() {
        return this.heap.length - 1;
    }
    peek() {
        return this.heap[1] || 24*60;
    }
    push(item) {
        this.heap.push(item);
        
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
        const returnItem = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(this.size() === 1) {
            return returnItem;
        } else if(this.size() === 2) {
            if(this.heap[leftIndex] < this.heap[currentIndex]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while((this.heap[leftIndex] < this.heap[currentIndex]) || 
              (this.heap[rightIndex] < this.heap[currentIndex])) {
            const minIndex = (this.heap[leftIndex] < this.heap[rightIndex])? leftIndex : rightIndex;
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
function solution(book_time) {
    let answer = 0;
    const heap = new MinHeap();
    const getMinute = (time) => {
        const [hh, mm] = time.split(':').map(Number);
        return hh * 60 + mm;
    };
    const booked = book_time.map(([startTime, endTime]) => [getMinute(startTime), getMinute(endTime)])
                            .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    for(const [startTime, endTime] of booked) {
        if(heap.peek() <= startTime) {
            heap.pop();
        }
        heap.push(endTime + 10);
        answer = Math.max(answer, heap.size());
    }
    
    return answer;
}