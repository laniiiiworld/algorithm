function solution(begin, target, words) {
    const n = words.length;
    const m = begin.length;
    const visited = Array(n).fill(false);
    let answer = n;
    
    const canBeChanged = (before, after) => {
        let count = 0;
        for(let i = 0; i < m; i++) {
            if(before[i] === after[i]) continue;
            count += 1;
        }
        return count === 1;
    };
    const dfs = (depth, text) => {
        if(text === target) {
            answer = Math.min(answer, depth);
            return;
        }
        
        for(let i = 0; i < n; i++) {
            if(visited[i] || !canBeChanged(text, words[i])) continue;
            visited[i] = true;
            dfs(depth + 1, words[i]);
            visited[i] = false;
        }
    };
    
    dfs(0, begin);
    
    return answer === n ? 0 : answer;
}