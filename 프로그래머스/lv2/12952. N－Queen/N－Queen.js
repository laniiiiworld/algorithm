function solution(n) {
    let count = 0;
    const queens = [];
    const dfs = (row) => {
        if(row === n) {
            count += 1;
            return;
        }
        
        for(let col = 0; col < n; col++) {
            if(queens.findIndex(([y, x]) => y === row || x === col || row - y === Math.abs(col - x)) > -1) continue;
            queens.push([row, col]);
            dfs(row + 1);
            queens.pop();
        }
    };
    
    dfs(0);
    
    return count;
}