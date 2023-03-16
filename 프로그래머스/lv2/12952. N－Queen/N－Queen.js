function solution(n) {
    let count = 0;
    const queens = [];
    const dfs = (row, col) => {
        if(queens.findIndex(([y, x]) => y === row || x === col || Math.abs(row - y) === Math.abs(col - x)) > -1) return;
        
        if(row === n - 1) {
            count += 1;
            return;
        }      
        
        for(let j=0; j<n; j++) {
            queens.push([row, col]);
            dfs(row + 1, j);
            queens.pop([row, col]);
        }
    };
    
    for(let i=0; i<n; i++) {
        dfs(0, i);
    }
    
    return count;
}