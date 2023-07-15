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
        
        while(parentIndex && this.heap[currentIndex][2] < this.heap[parentIndex][2]) {
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
            if(this.heap[leftIndex][2] < this.heap[currentIndex][2]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnItem;
        }
        
        while((this.heap[leftIndex][2] < this.heap[currentIndex][2]) || 
              (this.heap[rightIndex][2] < this.heap[currentIndex][2])) {
            const minIndex = (this.heap[leftIndex][2] < this.heap[rightIndex][2])? leftIndex : rightIndex;
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
    let answer = Infinity;
    const n = board.length;
    const newBoard = Array.from({length: n}, (_, i) => {
        return Array.from({length: n}, (_, j) => board[i][j] === 1? [1, 1] : [Infinity, Infinity]);
    });
    const canMove = (y, x, d) => y >= 0 && y < n && x >= 0 && x < n && newBoard[y][x][d] !== 1;
    //direction : 9 (방향없음), 0(상하), 1(좌우)
    const bfs = (y, x, cost, direction) => {
        const heap = new MinHeap();
        heap.push([y, x, cost, direction]);
        newBoard[y][x][0] = 0;
        newBoard[y][x][1] = 0;
        
        while(heap.size()) {
            const [nowY, nowX, nowCost, nowDirection] = heap.pop();
            if(nowY === n - 1 && nowX === n - 1) {
                answer = Math.min(answer, nowCost);
            }

            for(const [plusY, plusX] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
                const nextX = nowX + plusX;
                const nextY = nowY + plusY;
                const nextDirection = plusY? 0 : 1;
                if(!canMove(nextY, nextX, nextDirection)) continue;
                const plusCost = (nowDirection === 9 || nowDirection === nextDirection)? 100 : 600;
                const calcCost = nowCost + plusCost;
                if(newBoard[nextY][nextX][nextDirection] < calcCost) continue;
                newBoard[nextY][nextX][nextDirection] = calcCost;
                heap.push([nextY, nextX, calcCost, nextDirection]);
            }
        }
    };
    
    bfs(0, 0, 0, 9);
    
    return answer;
}