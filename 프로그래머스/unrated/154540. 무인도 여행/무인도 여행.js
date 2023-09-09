function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const board = maps.map(row => row.split(''));
    const canMove = (y, x) => y >= 0 && y < n && x >= 0 && x < m;
    const bfs = (y, x) => {
        let result = Number(board[y][x]);
        const queue = [];
        queue.push([y, x]);
        board[y][x] = 'X';
        
        while(queue.length) {
            const [nowY, nowX] = queue.shift();
            
            for(const [plusY, plusX] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
                const nextY = nowY + plusY;
                const nextX = nowX + plusX;
                if(!canMove(nextY, nextX) || board[nextY][nextX] === 'X') continue;
                result += Number(board[nextY][nextX]);
                board[nextY][nextX] = 'X';
                queue.push([nextY, nextX]);
            }
        }
        
        return result;
    };
    
    const answer = [];
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 'X') continue;
            answer.push(bfs(i, j));
        }
    }
    
    if(answer.length === 0) return [-1];
    
    return answer.sort((a, b) => a - b);
}