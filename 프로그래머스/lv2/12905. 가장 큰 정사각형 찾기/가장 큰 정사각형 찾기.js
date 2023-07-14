function solution(board) {
    const n = board.length;
    const m = board[0].length;
    const isSquare = (y, x) => board[y][x] && board[y - 1][x] && board[y][x - 1] && board[y - 1][x - 1];
    
    let max = board.reduce((acc, row) => acc = Math.max(acc, ...row), 0);
    for(let y = 1; y < n; y++) {
        for(let x = 1; x < m; x++) {
            if(!isSquare(y, x)) continue;
            board[y][x] = Math.min(board[y - 1][x], board[y][x - 1], board[y - 1][x - 1]) + 1;
            max = Math.max(max, board[y][x]);
        }
    }
    
    return max * max;
}