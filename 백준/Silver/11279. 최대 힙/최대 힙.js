const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const commands = input.slice(1, 1 + N).map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  empty() {
    return this.heap.length === 0 ? true : false;
  }
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
    }
  }
  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }
  bubbleDown(index) {
    const leftNodeIndex = 2 * index + 1;
    const rightNodeIndex = 2 * index + 2;
    const length = this.heap.length;
    let maxIndex = index;
    if (
      leftNodeIndex < length &&
      this.heap[leftNodeIndex] > this.heap[maxIndex]
    ) {
      maxIndex = leftNodeIndex;
    }
    if (
      rightNodeIndex < length &&
      this.heap[rightNodeIndex] > this.heap[maxIndex]
    ) {
      maxIndex = rightNodeIndex;
    }
    if (maxIndex !== index) {
      [this.heap[index], this.heap[maxIndex]] = [
        this.heap[maxIndex],
        this.heap[index],
      ];
      this.bubbleDown(maxIndex);
    }
  }
}

const solution = (N, commands) => {
  const maxHeap = new MaxHeap();
  let answer = '';
  commands.forEach((command) => {
    if (command === 0) {
      if (maxHeap.empty()) answer += '0\n';
      else answer += maxHeap.pop() + '\n';
    } else {
      maxHeap.insert(command);
    }
  });
  return answer;
};

console.log(solution(N, commands));