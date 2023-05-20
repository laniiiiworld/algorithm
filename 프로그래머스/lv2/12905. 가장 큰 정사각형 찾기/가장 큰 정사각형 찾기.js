function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            if(!board[i - 1][j - 1] || !board[i - 1][j] || !board[i][j - 1] || !board[i][j]) continue;
            board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        }
    }
    
    const value = board.reduce((acc, row) => acc = Math.max(acc, ...row), 0);
    return value * value;
}