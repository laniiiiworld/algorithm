function solution(rows, columns, queries) {
    const answer = [];
    const board = Array.from({length: rows}, (_, i) => Array.from({length: columns}, (_, j) => i * columns + j + 1));
    
    for(const [x1, y1, x2, y2] of queries) {
        let min = rows * columns;
        let next = board[x1 - 1][y1 - 1];
        for(let y = y1 - 1; y < y2; y++ ) {
            [next, board[x1 - 1][y]] = [board[x1 - 1][y], next];
            min = min < next? min : next;
        }
        for(let x = x1; x < x2; x++) {
            [next, board[x][y2 - 1]] = [board[x][y2 - 1], next];
            min = min < next? min : next;
        }
        for(let y = y2 - 2; y >= y1 -1; y--) {
            [next, board[x2 - 1][y]] = [board[x2 - 1][y], next];
            min = min < next? min : next;
        }
        for(let x = x2 - 2; x >= x1 - 1; x--) {
            [next, board[x][y1 - 1]] = [board[x][y1 - 1], next];
            min = min < next? min : next;
        }
        
        answer.push(min);
    }
    
    return answer;
}