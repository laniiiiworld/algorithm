function solution(rows, columns, queries) {
    const answer = [];
    const graph = Array.from({length: rows}, (_, r) => {
        return Array.from({length: columns}, (_, c) => columns * r + c + 1);
    });
    const rotate = (x1, y1, x2, y2) => {
        let result = graph[y1][x2];
        let temp = graph[y1][x2];
        
        // left to right
        for(let x = x2; x > x1; x--) {
            graph[y1][x] = graph[y1][x - 1];
            result = Math.min(result, graph[y1][x]);
        }
        // up to down
        for(let y = y1; y < y2; y++) {
            graph[y][x1] = graph[y + 1][x1];
            result = Math.min(result, graph[y][x1]);
        }
        // right to left
        for(let x = x1; x < x2; x++) {
            graph[y2][x] = graph[y2][x + 1];
            result = Math.min(result, graph[y2][x]);
        }
        // down to up
        for(let y = y2; y > y1 + 1; y--) {
            graph[y][x2] = graph[y - 1][x2];
            result = Math.min(result, graph[y][x2]);
        }
        
        graph[y1 + 1][x2] = temp;
        
        return result;
    };
    
    for(const [y1, x1, y2, x2] of queries) {
        const min = rotate(x1 - 1, y1 - 1, x2 - 1, y2 - 1);
        answer.push(min);
    }
    
    return answer;
}