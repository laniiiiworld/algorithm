function solution(m, n, board) {
    const removed = [];
    const isSquare = (row, col, target) => board[row + 1][col] === target && board[row][col + 1] === target && board[row + 1][col + 1] === target;
    const removeBlocks = () => {
        while(removed.length) {
            const [row, col] = removed.pop();
            board[row][col] = '';
            board[row + 1][col] = '';
            board[row][col + 1] = '';
            board[row + 1][col + 1] = '';
        }
    };
    const moveBlocks = () => {
        const newBoard = Array.from({length: m}, () => Array.from({length: n}).fill(''));
        const counts = Array(n).fill(0);
        for(let j = 0; j < n; j++) {
            const cols = [];
            for(let i = 0; i < m; i++) {
                if(board[i][j] === '') {
                    counts[j] += 1;
                } else {
                    cols.push(board[i][j]);
                }
            }
            
            for(let i = 0; i < cols.length; i++) {
                newBoard[i + counts[j]][j] = cols[i];
            }
        }
        
        return newBoard;
    };
    
    board = board.map(row => row.split(''));
    
    let isChanged = true;
    while(true) {
        isChanged = false;
        
        for(let i = 0; i < m - 1; i++) {
            for(let j = 0; j < n - 1; j++) {
                if(board[i][j] === '') continue;
                if(isSquare(i, j, board[i][j])) {
                    removed.push([i, j]);
                    isChanged = true;
                }
            }
        }
        
        if(!isChanged) break;
        
        removeBlocks();
        board = moveBlocks();
    }
    
    return board.reduce((acc, row) => acc += row.filter(v => !v).length, 0);
}