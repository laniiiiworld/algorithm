function solution(key, lock) {
    const n = lock.length;
    const m = key.length;
    const rotationLock = () => {
        const arr = Array.from({length: n}, () => []);
        for(let i = n - 1; i >= 0; i--) {
            for(let j = 0; j < n; j++) {
                arr[j].push(lock[i][j]);
            }
        }
        lock = arr;
        return arr;
    };
    const rotationKey = () => {
        const arr = Array.from({length: m}, () => []);
        for(let i = m - 1; i >= 0; i--) {
            for(let j = 0; j < m; j++) {
                arr[j].push(key[i][j]);
            }
        }
        key = arr;
    };
    const isEqual = (board) => {
        for(const row of board) {
            for(const value of row) {
                if(value === 0) return false;
            }
        }
        return true;
    };
    const compareKeyAndLock = (board, row, col) => {
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < m; j++) {
                if(row + i >= n || col + j >= n) continue;
                if(board[row + i][col + j] === key[i][j]) return false;
                board[row + i][col + j] = 1;
            }
        }
        
        return isEqual(board);
    };
    
    let rotationCount = 4;
    while(rotationCount--) {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                for(let r = 0; r < 4; r++) {
                    if(compareKeyAndLock([...rotationLock().map(row => [...row])], i, j)) return true;
                }
            }
        }
        rotationKey();
    }
    
    return false;
}