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
        let parentIndex = ~~(currentIndex / 2);
        
        while(parentIndex >= 1 && this.heap[currentIndex][2] < this.heap[parentIndex][2]) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = ~~(currentIndex / 2);
        }
    }
    pop() {
        if(this.heap.length === 2) return this.heap.pop();
        const returnItem = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(!this.heap[leftIndex]) {
            return returnItem;
        } else if(!this.heap[rightIndex]) {
            if(this.heap[leftIndex][2] < this.heap[currentIndex][2]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while(
              (this.heap[leftIndex][2] < this.heap[currentIndex][2]) || 
              (this.heap[rightIndex][2] < this.heap[currentIndex][2])
            ) {
            const minIndex = (this.heap[leftIndex][2] <= this.heap[rightIndex][2])? leftIndex : rightIndex;
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

function solution(board) {
    const N = board.length;
    const distance = Array.from({length: N}, () => Array.from({length: N}, () => [Infinity, Infinity]));
    const coordinates = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    const heap = new MinHeap();
    heap.push([0, 0, 0, true]);
    
    while(heap.size()) {
        const [y, x, cost, isNow] = heap.pop();
        
        if(distance[y][x][Number(isNow)] < cost) continue;
        distance[y][x][Number(isNow)] = cost;
        
        if(y === N - 1 && x === N - 1) break;
        
        for(const [plusY, plusX] of coordinates) {
            const nextX = x + plusX;
            const nextY = y + plusY;
            if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
            if(board[nextY][nextX]) continue;
            
            const isNext = plusY === 0;
            const calculatedCost = ((y === 0 && x === 0) || isNow === isNext)? cost + 100 : cost + 600;
            
            if(distance[nextY][nextX][Number(isNext)] < calculatedCost) continue;
            
            heap.push([nextY, nextX, calculatedCost, isNext]);
        }
    }
    
    return Math.min(...distance[N - 1][N - 1]);
}