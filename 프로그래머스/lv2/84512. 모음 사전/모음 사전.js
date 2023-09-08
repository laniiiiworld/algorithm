function solution(word) {
    let answer = 0;
    let isFind = false;
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    const dfs = (text) => {
        if(text === word) {
            isFind = true;
            return;
        }
        answer += 1;
        
        if(text.length === 5) return;
        
        for(let i = 0; i < alphabets.length; i++) {
            if(isFind) break;
            dfs(`${text}${alphabets[i]}`);
        }
    };
    
    dfs('');
    
    return answer;
}