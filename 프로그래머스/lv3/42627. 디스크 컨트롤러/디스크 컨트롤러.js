class MinHeap {
    constructor() {
        this.heap = [null];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(currentIndex > 1 && this.heap[currentIndex][1] < this.heap[parentIndex][1]) {
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
        
        while(
              (this.heap[leftIndex][1] < this.heap[currentIndex][1]) || 
              (this.heap[rightIndex][1] < this.heap[currentIndex][1])
            ) {
            const minIndex = this.heap[leftIndex][1] < this.heap[rightIndex][1] ? leftIndex : rightIndex;
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
    jobs.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    const length = jobs.length;
    const heap = new MinHeap(); // 대기열
    let time = 0; // 현재 시간
    let totalWorkTime = 0; // 현재까지 작업에 소요된 시간
    
    // 현재 요청시간이 지난 작업들을 대기열에 추가
    const addNewJobs = () => {
        while(jobs.length && jobs[jobs.length - 1][0] <= time) {
            heap.push(jobs.pop());
        }
    };
    
    while(jobs.length || !heap.isEmpty()) {
        addNewJobs();
        
        if(heap.isEmpty()) {
            time = jobs[jobs.length - 1][0];
            addNewJobs();
        }
        
        const [startTime, workTime] = heap.pop();
        const waitingTime = time - startTime;
        time += workTime;
        totalWorkTime += waitingTime + workTime;
    }
    
    return Math.floor(totalWorkTime / length);
}