class MinHeap {
    constructor() {
        this.heap = [null];
    }
    peek() {
        return this.heap[1];
    }
    size() {
        return this.heap.length - 1;
    }
    push(item) {
        this.heap.push(item);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex > 0 && this.heap[currentIndex].start < this.heap[parentIndex].start) {
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
            if(this.heap[leftIndex].start < this.heap[currentIndex].start) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while((this.heap[leftIndex].start < this.heap[currentIndex].start) || 
              (this.heap[rightIndex].start < this.heap[currentIndex].start)) {
            const minIndex = (this.heap[leftIndex].start <= this.heap[rightIndex].start)? leftIndex : rightIndex;
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
function solution(plans) {
    let time = 0;
    const answer = [];
    const plansHeap = new MinHeap();
    const remained = new MinHeap();
    const getPlayTime = (name, start, playTime) => {
        if(plansHeap.size()) {
            playTime = playTime - (plansHeap.peek().start - time);
            time = (playTime < 0)? plansHeap.peek().start + playTime : plansHeap.peek().start;
        } else {
            playTime = 0;
        }
        return playTime;
    };
    const workPlane = (heap) => {
        let {name, start, playTime} = heap.pop();
        
        const played = getPlayTime(name, start, playTime);
        
        if(played > 0) {
            remained.push({name, start: -1 * time, playTime: played});
        } else {
            answer.push(name);
        }
    };
    
    for(const [name, start, playTime] of plans) {
        const [hh24, mm] = start.split(':').map(Number);
        plansHeap.push({name, start: hh24 * 60 + mm, playTime: Number(playTime)});
    }
    
    time = plansHeap.peek().start;
    
    while(plansHeap.size() || remained.size()) {
        if(plansHeap.size() && plansHeap.peek().start <= time) {
            workPlane(plansHeap);
        } else if(remained.size() && remained.peek().start <= time) {
            workPlane(remained);
        } else if(plansHeap.size() && plansHeap.peek().start > time) {
            time = plansHeap.peek().start;
        }
    }
    
    return answer;
}