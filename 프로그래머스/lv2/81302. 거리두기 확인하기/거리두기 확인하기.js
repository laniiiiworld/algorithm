function solution(places) {
    const n = places[0].length;
    const m = places[0][0].length;
    const canMove = (y, x) => x >= 0 && x < m && y >= 0 && y < n;
    const dfs = (board, y, x, visited, result) => {
        if(visited.length === 3) return true;
        
        for(const [plusY, plusX] of [[0, 1], [1, 0]]) {
            const nextY = y + plusY;
            const nextX = x + plusX;
            if(!result) return false;
            if(!canMove(nextY, nextX)) continue;
            if(board[nextY][nextX] === 'P') {
                if(visited.includes('P') && visited[visited.length - 1] !== 'X') return false;
            }
            result = dfs(board, nextY, nextX, [...visited, board[nextY][nextX]], result);
        }
        
        return result;
    };
    const search = (board) => {
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < m; j++) {
                if(board[i][j] === 'X') continue;
                if(!dfs(board, i, j, [board[i][j]], true)) return 0;
                if(i - 1 >= 0 && j + 1 < 5 &&
                   board[i][j] === 'P' && board[i - 1][j + 1] === 'P' &&
                   (board[i - 1][j] !== 'X' || board[i][j + 1] !== 'X') ) {
                    return 0;
                }
            }
        }
        
        return 1;
    };
    
    return places.map(v => search(v));
}