let input = require('fs').readFileSync('/dev/stdin').toString().trim();

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(num) {
  const queue = new Queue();
  let isMoved = false;

  for (let i = 1; i <= num; i++) {
    queue.enqueue(i);
  }

  while (queue.size() > 1) {
    const firstEl = queue.dequeue();
    if (isMoved) {
      queue.enqueue(firstEl);
    }
    isMoved = !isMoved;
  }
  return queue.peek();
}

console.log(solution(Number(input)));