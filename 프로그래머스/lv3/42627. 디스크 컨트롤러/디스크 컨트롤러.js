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
        
        while(parentIndex > 0 && this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
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
function solution(jobs) {
    jobs.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    
    const length = jobs.length;
    const heap = new MinHeap();
    let totalWorkTime = 0;
    let time = 0;
    
    while(jobs.length || heap.size()) {
        if(jobs.length && heap.size() === 0) {
            const [requestTime, workTime] = jobs.pop();
            time = Math.max(requestTime, time);
            heap.push([requestTime, workTime]);
        }
        
        while(jobs.length && jobs[jobs.length - 1][0] <= time) {
            heap.push(jobs.pop());
        }
        
        if(heap.size() === 0) continue;
        
        const [requestTime, workTime] = heap.pop();
        totalWorkTime += time - requestTime + workTime;
        time += workTime;
    }
    
    return ~~(totalWorkTime / length);
}