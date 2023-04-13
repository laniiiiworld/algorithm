function solution(begin, target, words) {
    let answer = 0;
    const n = words.length;
    const visited = Array(n).fill(false);
    const isChange = (a, b) => {
        let count = 0;
        for(let i = 0; i < n; i++) {
            if(a[i] === b[i]) continue;
            count += 1;
        }
        return count === 1;
    };
    const dfs = (word, count) => {
        if(word === target) {
            answer = count;
            return;
        }
        for(let i = 0; i < n; i++) {
            if(visited[i]) continue;
            if(!isChange(word, words[i])) continue;
            visited[i] = true;
            dfs(words[i], count + 1);
            visited[i] = false;
        }
    };
    
    if(!words.includes(target)) return 0;
    
    dfs(begin, 0);
    
    return answer;
}