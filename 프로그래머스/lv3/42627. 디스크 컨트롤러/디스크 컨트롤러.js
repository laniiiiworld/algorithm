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
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex && this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
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
            if(this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
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
        
        return returnItem;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

function solution(jobs) {
    jobs.sort((a, b) => b[0] - a[0]);
    
    const heap = new MinHeap();
    const n = jobs.length;
    let time = 0;
    let totalWorkTime = 0;
    
    while(heap.size() || jobs.length) {
        if(!heap.size() && jobs.length && jobs[jobs.length - 1][0] > time) {
            time = jobs[jobs.length - 1][0];
        }
        while(jobs.length && jobs[jobs.length - 1][0] <= time) {
            heap.push(jobs.pop());
        }
        
        const [startTime, requiredTime] = heap.pop();
        const waitTime = time <= startTime? 0 : time - startTime;
        const workTime = requiredTime + waitTime;
        time = startTime + requiredTime + waitTime;
        totalWorkTime += workTime;
    }
    
    return Math.floor(totalWorkTime / n);
}