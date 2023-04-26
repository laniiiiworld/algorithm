function solution(board){
    const n = board.length;
    const m = board[0].length;

    if(n <= 1 || m <= 1) return 1;

    let max = 0;
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            if(board[i][j] < 1) continue;
            let min = Math.min(board[i-1][j], board[i-1][j-1], board[i][j-1]);
            board[i][j] = min + 1;
            max = Math.max(max, min + 1);
        }
    }

    return max * max;
}