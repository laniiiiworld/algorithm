function solution(n) {
    let answer = 0;
    const isEnable = (row, col, graph) => {
        for(const [r, c] of graph) {
            if(r === row) return false;
            if(c === col) return false;
            if(Math.abs(r - row) === Math.abs(c - col)) return false;
        }
        return true;
    };
    const dfs = (row, graph) => {
        if(row === n) {
            answer += 1;
            return;
        }
        for(let col = 0; col < n; col++) {
            if(!isEnable(row, col, graph)) continue;
            dfs(row + 1, [...graph, [row, col]]);
        }
    };
    
    dfs(0, []);
    
    return answer;
}