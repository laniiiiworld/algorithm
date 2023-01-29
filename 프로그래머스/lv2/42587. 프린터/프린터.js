class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.queue[this.rear++] = item;
    }

    dequeue() {
        const item = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return item;
    }

    peek() {
        return this.queue[this.front];
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    priorities.forEach((value, index) => {
        queue.enqueue({index, value});
    });
    priorities.sort((a, b) => a - b);
    
    let count = 0;
    

    while(true) {
        const item = queue.dequeue();
        if(item.value < priorities[priorities.length - 1]) {
            queue.enqueue(item);
        } else {
            priorities.pop();
            count++;
            if(item.index === location) break;
        }
    }

    return count;
}
