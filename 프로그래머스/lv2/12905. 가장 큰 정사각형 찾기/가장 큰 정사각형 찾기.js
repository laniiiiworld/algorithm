function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            const a = board[i - 1][j - 1];
            const b = board[i - 1][j];
            const c = board[i][j - 1];
            const d = board[i][j];
            
            if(!a || !b || !c || !d) continue;
            
            board[i][j] = Math.min(a, b, c) + 1;
        }
    }
    
    const maxWidth = Math.max(...board.map(row => Math.max(...row)));
    
    return maxWidth * maxWidth;
}