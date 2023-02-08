class MinHeap {
    constructor() {
        this.heap = [null];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex !== 0 && item[1] < this.heap[parentIndex][1]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    pop() {
        if(this.isEmpty()) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnItem = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(!this.heap[leftIndex]) return returnItem;
        if(!this.heap[rightIndex]) {
            if(this.heap[leftIndex][1] < this.heap[currentIndex][1]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while((this.heap[leftIndex][1] < this.heap[currentIndex][1]) ||
              (this.heap[rightIndex][1] < this.heap[currentIndex][1])) {
            const minIndex = (this.heap[leftIndex][1] < this.heap[rightIndex][1]) ? leftIndex : rightIndex;
            this._swap(minIndex, currentIndex);
            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            if(leftIndex >= this.heap.length - 1) break;
        }
        
        return returnItem;
    }
}

function solution(jobs) {
    jobs.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    const length = jobs.length;
    
    const heap = new MinHeap(); //현재 요청중인 작업들
    let totalWorkTime = 0; //작업의 요청부터 종료까지 걸린 "총" 시간
    let time = 0; //현재 시간
    
    while(jobs.length || !heap.isEmpty()) {
        let job = null;
        let workTime = 0;
        
        while(jobs.length && jobs[jobs.length - 1][0] <= time) {
            heap.push(jobs.pop());
        }
        
        if(heap.isEmpty()) {
            job = jobs.pop();
            time = job[0];
            heap.push(job);
        }
        
        job = heap.pop();
        workTime = job[1] + time - job[0];
        totalWorkTime += workTime;
        time += job[1];
    }
    
    return Math.floor(totalWorkTime / length);
}

