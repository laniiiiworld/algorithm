function solution(n) {
    let answer = 0;
    const queens = Array(n).fill(-1);
    const isEnable = (row, col) => {
        for(let r = 0; r < n; r++) {
            const c = queens[r];
            if(c === -1) break;
            if(r === row) return false;
            if(c === col) return false;
            if(Math.abs(r - row) === Math.abs(c - col)) return false;
        }
        return true;
    };
    const dfs = (row) => {
        if(row === n) {
            answer += 1;
            return;
        }
        for(let col = 0; col < n; col++) {
            queens[row] = -1;
            if(!isEnable(row, col)) continue;
            queens[row] = col;
            dfs(row + 1);
        }
    };
    
    dfs(0);
    
    return answer;
}