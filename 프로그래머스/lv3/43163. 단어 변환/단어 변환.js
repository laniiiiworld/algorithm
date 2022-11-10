function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    const visited = Array(words.length).fill(false);
    let answer = words.length;
    
    //변환할 수 있는 단어인지 확인하는 함수
    const isChange = (before, after) => {
        let count = 0;
        for(let i=0; i<before.length; i++) {
            if(before[i] !== after[i]) continue;
            count++;
        }
        //하나의 알파벳만 바뀌는지 확인
        return count === before.length - 1;
    };
    
    //dfs 탐색
    const dfs = (word, count) => {
        if(word === target) {
            answer = Math.min(answer, count);
            return;
        }
        
        for(let i=0; i<words.length; i++) {
            if(visited[i]) continue;
            if(!isChange(word, words[i])) continue;
            
            visited[i] = true;
            dfs(words[i], count+1);
            visited[i] = false;
        }
    };
    
    dfs(begin, 0);
    
    return answer;
}