function solution(begin, target, words) {
    if(!words.find(word => word === target)) return 0;
    
    let answer = words.length;
    const visited = new Array(words.length).fill(false);
    const isChange = (a, b) => {
        let count = 0;
        for(let i=0; i<a.length; i++) {
            if(count > 1) return false;
            count += (a[i] !== b[i])? 1 : 0;
        }
        return count === 1;
    };
    const dfs = (before, count) => {
        if(before === target) {
            answer = Math.min(answer, count);
            return;
        }
        
        for(let i=0; i<words.length; i++) {
            if(visited[i] || !isChange(before, words[i])) continue;
            visited[i] = true;
            dfs(words[i], count+1);
            visited[i] = false;
        }
    };
    
    dfs(begin, 0);
    
    return answer;
}