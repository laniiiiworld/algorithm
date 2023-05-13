function solution(rows, columns, queries) {
    const answer = [];
    const board = Array.from({length: rows}, (_, i) => Array.from({length: columns}, (_, j) => i * columns + j + 1));
    
    for(const [x1, y1, x2, y2] of queries) {
        const last = board[x1 - 1][y1 - 1];
        let min = last;
         
        for(let x = x1 - 1; x < x2 - 1; x++) {
            board[x][y1 - 1] = board[x + 1][y1 - 1];
            min = Math.min(min, board[x][y1 - 1]);
        }
        for(let y = y1 - 1; y < y2 - 1; y++) {
            board[x2 - 1][y] = board[x2 - 1][y + 1];
            min = Math.min(min, board[x2 - 1][y]);
        }
        for(let x = x2 - 1; x >= x1; x--) {
            board[x][y2 - 1] = board[x - 1][y2 - 1];
            min = Math.min(min, board[x][y2 - 1]);
        }
        for(let y = y2 - 1; y >= y1; y--) {
            board[x1 - 1][y] = board[x1 - 1][y - 1];
            min = Math.min(min, board[x1 - 1][y]);
        }
        
        board[x1 - 1][y1] = last;
        
        answer.push(min);
    }
    
    return answer;
}