function solution(board) {
    const n = board.length;
    const setDanger = (a, b, n) => {
        for(let i=Math.max(a-1, 0); i<=Math.min(a+1, n-1); i++) {
            for(let j=Math.max(b-1, 0); j<=Math.min(b+1, n-1); j++) {
                if(board[i][j] === 0) board[i][j] = 2;
            }
        }
    };
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] === 1) setDanger(i, j, n);
        }
    }
    
    return board.reduce((acc, line) => {
        return acc += line.filter(value => !value).length;
    }, 0);
}