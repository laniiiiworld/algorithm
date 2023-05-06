function solution(word) {
    let answer = 0;
    let isFind = false;
    const baseLetters = ['A', 'E', 'I', 'O', 'U'];
    const visited = Array(5).fill(false);
    const dfs = (text) => {
        if(text === word) {
            isFind = true;
            return;
        }
        if(text.length === 5) {
            return;
        }
        
        for(let i = 0; i < baseLetters.length; i++) {
            if(isFind) break;
            answer += 1;
            dfs(`${text}${baseLetters[i]}`);
        }
    };
    
    dfs('', 0);
    
    return answer;
}