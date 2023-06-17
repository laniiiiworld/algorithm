function solution(board, skill) {
    const n = board.length;
    const m = board[0].length;
    
    const graph = Array.from({length: n}, () => Array(m).fill(0));
    
    for(const [type, r1, c1, r2, c2, degree] of skill) {        
        graph[r1][c1] += type === 1? -1 * degree : degree;
        if(r2 + 1 < n) graph[r2 + 1][c1]  += type === 2? -1 * degree : degree;
        if(c2 + 1 < m) graph[r1][c2 + 1]  += type === 2? -1 * degree : degree;
        if(r2 + 1 < n && c2 + 1 < m) {
            graph[r2 + 1][c2 + 1]  += type === 1? -1 * degree : degree;
        }
    }
    
    //누적합 좌 > 우
    for(let row = 0; row < n; row++) {
        for(let col = 1; col < m; col++) {
            graph[row][col] += graph[row][col - 1];
        }
    }
    
    //누적합 상 > 하
    for(let col = 0; col < m; col++) {
        for(let row = 1; row < n; row++) {
            graph[row][col] += graph[row - 1][col];
        }
    }
    
    //누적합 적용
    let answer = 0;
    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            board[row][col] += graph[row][col];
            answer += (board[row][col] > 0)? 1 : 0;
        }
    }
    
    return answer;
}