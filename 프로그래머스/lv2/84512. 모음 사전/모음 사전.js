function solution(target) {
    let answer = -1;
    let isFind = false;
    const letters = ['A', 'E', 'I', 'O', 'U'];
    const dfs = (word) => {
        answer += 1;
        
        if(word === target) {
            isFind = true;
            return;
        }
        if(word.length === 5) return;
        
        for(let i = 0; i < letters.length; i++) {
            if(isFind) break;
            dfs(`${word}${letters[i]}`);
        }
    };
    
    dfs('');
    
    return answer;
}