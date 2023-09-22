
class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    isEmpty() {
        return this.rear === this.front;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front++];
        return value;
    }
}

function solution(maps) {
    const MAX_R = maps.length;
    const MAX_C = maps[0].length;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    let start = [0, 0];
    let queue = new Queue();
    let visited = maps.map((v, row) => {
        if (v.includes('S')) {
            const col = v.indexOf('S');
            start = [row, col];
        }
        return Array(v.length).fill(false);
    });

    visited[start[0]][start[1]] = true;
    queue.enqueue({ row: start[0], col: start[1], length: 0, open: false });


    while (!queue.isEmpty()) {
        let { row, col, length, open } = queue.dequeue();
        if (maps[row][col] === 'L') {
            visited = maps.map(v => Array(v.length).fill(false));
            visited[row][col] = true;
            open = true;
            queue = new Queue();
        }
        if (open && maps[row][col] === 'E') {
            return length;
        }

        for (let i = 0; i < 4; i++) {
            const nr = row + dy[i];
            const nc = col + dx[i];
            if (nr > -1 && nc > -1 && nr < MAX_R && nc < MAX_C && !visited[nr][nc] && maps[nr][nc] !== 'X') {
                visited[nr][nc] = true;
                queue.enqueue({ row: nr, col: nc, length: length + 1, open });
            }
        }
    }

    return -1;
}
