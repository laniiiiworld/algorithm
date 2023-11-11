class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    size() {
        return this.rear - this.front;
    }
    enqueue(value) {
        this.queue.push(value);
        this.rear += 1;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        return value;
    }
}
function solution(maps) {
    const answer = [];
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length : n}, () => Array(m).fill(false));

    const bfs = (y, x) => {
        let result = 0;
        const queue = new Queue();
        queue.enqueue([y, x]);
        visited[y][x] = true;

        while(queue.size()) {
            const [nowY, nowX] = queue.dequeue();

            result += Number(maps[nowY][nowX]);

            for(const [nextY, nextX] of [[nowY + 1, nowX], [nowY - 1, nowX], [nowY, nowX + 1], [nowY, nowX - 1]]) {
                if(nextY < 0 || nextX < 0 || nextY === n || nextX === m) continue;
                if(maps[nextY][nextX] === 'X' || visited[nextY][nextX]) continue;
                queue.enqueue([nextY, nextX]);
                visited[nextY][nextX] = true;
            }
        }

        return result;
    };

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] === 'X' || visited[i][j]) continue;
            answer.push(bfs(i, j));
        }
    }

    return answer.length? answer.sort((a, b) => a - b) : [-1];
}