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
    const n = jobs.length;
    const disk = new MinHeap();
    let totalTime = 0; //작업의 요청부터 종료까지 걸린 시간
    let time = 0; // 현재 시간
    let jobIndex = 0;
    
    jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    time = jobs[0][0];
    
    while(disk.size() || jobIndex < n) {
        if(jobIndex < n) {
            // 하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리
            if(disk.size() === 0 && jobs[jobIndex][0] > time) {
                time = jobs[jobIndex][0];
            }
            //추가로 요청이 들어온 작업들 disk에 넣기
            while(jobIndex < n && jobs[jobIndex][0] <= time) {
                disk.push(jobs[jobIndex++]);
            }
        }
        //disk에서 작업을 하나 꺼내 처리
        const [requestTime, workTime] = disk.pop();
        totalTime += time - requestTime + workTime;
        time += workTime;
    }
    
    return Math.floor(totalTime / n);
}