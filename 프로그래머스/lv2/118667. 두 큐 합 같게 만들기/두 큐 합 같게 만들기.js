class Queue {
    #sum;
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.#sum = 0;
    }
    get sum() {
        return this.#sum;
    }
    size() {
        return this.rear - this.front;
    }
    insert(item) {
        this.queue.push(item);
        this.rear += 1;
        this.#sum += item;
    }
    pop() {
        const item = this.queue[this.front];
        delete this.queue[this.front++];
        this.#sum -= item;
        return item;
    }
}

function solution(queue1, queue2) {
    const n = queue1.length;
    const q1 = new Queue();
    const q2 = new Queue();
    for(let i = 0; i < n; i++) {
        q1.insert(queue1[i]);
        q2.insert(queue2[i]);
    }
    
    if((q1.sum + q2.sum) % 2) return -1;
    
    let count = 0;
    while(q1.sum !== q2.sum) {
        while(q1.sum < q2.sum) {
            q1.insert(q2.pop());
            count += 1;
        }
        if(q2.sum < q1.sum) {
            q2.insert(q1.pop());
            count += 1;
        }
        if(count >= n * 3) return -1;
    }
    
    return count;
}