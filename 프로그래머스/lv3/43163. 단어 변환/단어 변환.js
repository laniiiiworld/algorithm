function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    let answer = words.length;
    const visited = Array(words.length).fill(false);
    const isChange = (origin, changed) => {
        let count = 0;
        for(let i=0; i<origin.length; i++) {
            if(count > 1) break;
            if(origin[i] === changed[i]) continue;
            count += 1;
        }
        return count === 1;
    };
    const changeWord = (word, count) => {
        if(word === target) {
            answer = Math.min(answer, count);
            return;
        }
        if(!visited.includes(false)) return;
        
        for(let i=0; i<words.length; i++) {
            if(visited[i]) continue;
            if(!isChange(word, words[i])) continue;
            visited[i] = true;
            changeWord(words[i], count + 1);
            visited[i] = false;
        }
    };
    
    changeWord(begin, 0);
    
    return answer;
}