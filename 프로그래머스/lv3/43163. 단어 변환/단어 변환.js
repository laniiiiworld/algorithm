function solution(begin, target, words) {
    let answer = words.length + 1;
    const visited = Array(words.length).fill(false);
    const isChange = (before, after) => {
        let count = 0;
        for(let i = 0; i < before.length; i++) {
            if(before[i] !== after[i]) count += 1;
        }
        return count === 1;
    };
    const dfs = (before, count) => {
        if(before === target) {
            answer = Math.min(answer, count);
            return;
        }
        
        for(let i = 0; i < words.length; i++) {
            if(visited[i]) continue;
            if(!isChange(before, words[i])) continue;
            visited[i] = true;
            dfs(words[i], count + 1);
            visited[i] = false;
        }
    };
    
    if(!words.includes(target)) return 0;
    
    dfs(begin, 0);
    
    return answer === words.length + 1 ? 0 : answer;
}