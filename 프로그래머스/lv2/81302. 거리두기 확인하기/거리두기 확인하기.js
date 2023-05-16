function solution(places) {
    const moves = [[0, 1], [0, -1], [1, 0]];
    let visited = Array.from({length: 5}, () => Array(5).fill(false));
    let board = [];
    
    const isRight = (y, x, distance, beforeIsPerson) => {
        for(const [plusY, plusX] of moves) {
            const nextY = y + plusY;
            const nextX = x + plusX;
            if(nextX < 0 || nextY >= 5 || nextX >= 5 || distance >= 2) continue;
            if(visited[nextY][nextX]) continue;
            
            visited[nextY][nextX] = true;
            
            if(beforeIsPerson && board[y][x] !== 'X' && board[nextY][nextX] === 'P') return 0;
            if(isRight(nextY, nextX, distance + 1, board[y][x] === 'P') === 0) return 0;
            
            visited[nextY][nextX] = false;
        }
        
        return 1;
    };
    const checkPlace = (room) => {
        visited = Array.from({length: 5}, () => Array(5).fill(false));
        board = room;
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if(board[i][j] !== 'P') continue;
                visited[i][j] = true;
                if(isRight(i, j, 0, true) === 0) {
                    return 0;
                }
                visited[i][j] = false;
            }
        }
        
        return 1;
    };
    return places.map((room) => checkPlace(room));
}