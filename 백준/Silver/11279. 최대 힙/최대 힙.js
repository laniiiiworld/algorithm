const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (this.heap[currentIndex] < this.heap[leftIndex] || this.heap[currentIndex] < this.heap[rightIndex]) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[rightIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[rightIndex]];
        currentIndex = rightIndex;
      } else {
        [this.heap[leftIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[leftIndex]];
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function solution(input) {
  let answer = '';
  const heap = new MaxHeap();
  for (const v of input) {
    if (v === 0) {
      if (heap.heap.length === 1) {
        answer += '0\n';
      } else {
        answer += `${heap.pop()}\n`;
      }
    } else {
      heap.push(v);
    }
  }

  console.log(answer);
}

solution(input.slice(1).map(Number));
