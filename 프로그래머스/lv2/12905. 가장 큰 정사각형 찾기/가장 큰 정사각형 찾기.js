function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    if(Math.min(n, m) === 1) return Math.max(...board.flat());
    
    let answer = 1;
    
    for(let row = 1; row < n; row++) {
        for(let col = 1; col < m; col++) {
            if(!board[row][col] || !board[row - 1][col] || !board[row][col - 1] || !board[row - 1][col - 1]) continue;
            board[row][col] = Math.min(board[row - 1][col], board[row][col - 1], board[row - 1][col - 1]) + 1;
            answer = Math.max(answer, board[row][col]);
        }
    }
    
    return Math.max(...board.map(row=>Math.max(...row)))**2;
}