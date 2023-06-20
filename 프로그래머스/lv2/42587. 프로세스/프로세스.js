class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        return this.rear - this.front;
    }
    enqueue(item) {
        this.queue.push(item);
        this.rear += 1;
    }
    dequeue() {
        const item = this.queue[this.front];
        delete this.queue[this.front++];
        return item;
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    priorities.forEach((value, index) => {
        queue.enqueue({index, value});
    });

    const sorted = priorities.sort((a, b) => a - b);
    let count = 1;
    let item = queue.dequeue();

    while(item.value !== sorted[sorted.length - 1] || item.index !== location) {
        if(item.value !== sorted[sorted.length - 1]) {
            queue.enqueue(item);
        } else {
            if(item.index === location) break;
            sorted.pop();
            count++;
        }
        item = queue.dequeue();
    }

    return count;
}