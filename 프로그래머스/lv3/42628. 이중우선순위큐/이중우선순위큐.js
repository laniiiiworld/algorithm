class MinHeap {
    constructor() {
        this.heap = [null];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    push(value) {
        this.heap.push(parseInt(value));
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex/2);
        
        while(parentIndex !== 0 && this.heap[parentIndex] > value) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }
    pop(deletedItems) {
        this._removeAlreadyPopedItems(deletedItems);
        return this._removeItem();
    }
    peek(deletedItems) {
        this._removeAlreadyPopedItems(deletedItems);
        return this.heap[1];
    }    
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    _removeItem() {
        if(this.isEmpty()) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(!this.heap[leftIndex]) return returnValue;
        if(!this.heap[rightIndex]) {
            if(this.heap[leftIndex] < this.heap[currentIndex]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        while((this.heap[leftIndex] < this.heap[currentIndex]) ||
              (this.heap[rightIndex] < this.heap[currentIndex])) {
            const minIndex = (this.heap[leftIndex] < this.heap[rightIndex]) ? leftIndex : rightIndex;
            this._swap(minIndex, currentIndex);
            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            if(leftIndex >= this.heap.length - 1) break;
        }
        
        return returnValue;
    }
    _removeAlreadyPopedItems(deletedItems) {
        while(deletedItems.has(`MAX${this.heap[1]}`)) {
            const deletedItem = `MAX${this.heap[1]}`;
            const itemCount = deletedItems.get(deletedItem);
            if(itemCount - 1 === 0) {
                deletedItems.delete(deletedItem);
            } else {
                deletedItems.set(deletedItem, itemCount - 1);
            }
            this._removeItem();
        }
    }
}

class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    isEmpty() {
        return this.heap.length === 1;
    }
    push(value) {
        this.heap.push(parseInt(value));
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex/2);
        
        while(parentIndex !== 0 && this.heap[parentIndex] < value) {
            this._swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }
    pop(deletedItems) {
        this._removeAlreadyPopedItems(deletedItems);
        return this._removeItem();
    }
    peek(deletedItems) {
        this._removeAlreadyPopedItems(deletedItems);
        return this.heap[1];
    }    
    _removeItem() {
        if(this.isEmpty()) return null;
        if(this.heap.length === 2) return this.heap.pop();
        
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        if(!this.heap[leftIndex]) return returnValue;
        if(!this.heap[rightIndex]) {
            if(this.heap[leftIndex] > this.heap[currentIndex]) {
                this._swap(leftIndex, currentIndex);
            }
            return returnValue;
        }
        
        while(
              (this.heap[currentIndex] < this.heap[leftIndex]) || 
              (this.heap[currentIndex] < this.heap[rightIndex])
             ) {
            const minIndex = (this.heap[leftIndex] > this.heap[rightIndex]) ? leftIndex : rightIndex;
            this._swap(minIndex, currentIndex);
            currentIndex = minIndex;
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
            if(leftIndex >= this.heap.length - 1) break;
        }
        
        return returnValue;
    }
    _removeAlreadyPopedItems(deletedItems) {
        while(deletedItems.has(`MIN${this.heap[1]}`)) {
            const deletedItem = `MIN${this.heap[1]}`;
            const itemCount = deletedItems.get(deletedItem);
            
            if(itemCount - 1 === 0) {
                deletedItems.delete(deletedItem);
            } else {
                deletedItems.set(deletedItem, itemCount - 1);
            }
            this._removeItem();
        }
    }
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

function solution(operations) {
    const deletedItems = new Map(); //삭제된 원소들
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    let count = 0; //이중 우선순위 큐에 남아있어야 하는 원소 수
    
    for(const operation of operations) {
        const [code, value] = operation.split(' ');
        if(code === 'I') {
            count += 1;
            minHeap.push(value);
            maxHeap.push(value);
        } else {
            count -= count? 1 : 0;
            let deletedItem = null;
            if(value === '1') {
                deletedItem = maxHeap.pop(deletedItems);
            } else {
                deletedItem = minHeap.pop(deletedItems);
            }
            if(deletedItem) {
                deletedItem = (value === '1')? `MAX${deletedItem}` : `MIN${deletedItem}`;
                const itemCount = deletedItems.get(deletedItem) || 0;
                deletedItems.set(deletedItem, itemCount + 1);
            }
        }
    }
    const maxNumber = maxHeap.peek(deletedItems);
    const minNumber = minHeap.peek(deletedItems); 
    return count? [maxNumber, minNumber] : [0, 0];
}