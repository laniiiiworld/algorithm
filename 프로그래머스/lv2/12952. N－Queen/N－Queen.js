function solution(n) {
    let answer = 0;
    const queens = [];
    const dfs = (row, col) => {
        if(row === n - 1) {
            answer += 1;
            return;
        }
        for(let col = 0; col < n; col++) {
            if(queens.findIndex(([y, x]) => x === col || Math.abs(x - col) === row - y + 1) > -1) continue;
            queens.push([row + 1, col]);
            dfs(row + 1, col);
            queens.pop();
        }
    };
    
    dfs(-1, 0);
    
    return answer;
}