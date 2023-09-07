function solution(begin, target, words) {
    let answer = words.length;
    const visited = Array(words.length).fill(false);
    const isChange = (before, after) => {
        let count = 0;
        for(let i = 0; i < before.length; i++) {
            if(before[i] === after[i]) continue;
            count += 1;
        }
        return count === 1;
    };
    const dfs = (now, count) => {
        if(now === target) {
            answer = Math.min(answer, count);
            return;
        }
        
        for(let i = 0; i < words.length; i++) {
            if(visited[i] || !isChange(now, words[i])) continue;
            visited[i] = true;
            dfs(words[i], count + 1);
            visited[i] = false;
        }
    };
    
    dfs(begin, 0);
    
    return answer === words.length? 0 : answer;
}