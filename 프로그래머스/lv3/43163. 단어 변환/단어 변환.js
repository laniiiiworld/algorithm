function solution(begin, target, words) {
    const n = words.length;
    const m = words[0].length;
    
    if(!words.includes(target)) return 0;
    
    let answer = n;
    const visited = Array(n).fill(false);
    const isChange = (before, after) => {
        let count = 0;
        for(let i = 0; i < m; i++) {
            if(before[i] !== after[i]) count += 1;
        }
        return count === 1;
    };
    const dfs = (count, word) => {
        if(word === target) {
            answer = (count < answer)? count : answer;
            return;
        }
        
        for(let i = 0; i < n; i++) {
            if(visited[i] || !isChange(word, words[i])) continue;
            visited[i] = true;
            dfs(count + 1, words[i]);
            visited[i] = false;
        }
    };
    
    dfs(0, begin);
    
    return answer;
}