function solution(board) {
    const n = board.length;
    const m = board[0].length;
    
    if(n === 1 || m === 1) return Math.max(...board.flat());
    
    let max = 0;
    for(let y = 1; y < n; y++) {
        for(let x = 1; x < m; x++) {
            if(!board[y][x]) continue;
            board[y][x] = Math.min(board[y - 1][x - 1], board[y - 1][x], board[y][x - 1]) + 1;
        }
        max = Math.max(max, ...board[y]);
    }
    
    return max * max;
}