function solution(n, words) {
    const calledWords = new Set();
    let lastLetter = words[0].charAt(words[0].length - 1);
    let i=1;
    
    calledWords.add(words[0]);
    
    while(i < words.length) {
        const word = words[i];
        //규칙1 앞사람이 말한 단어의 마지막 문자로 시작
        //규칙2 이전에 등장했던 단어 사용X
        if(word.charAt(0) !== lastLetter || calledWords.has(word)) {
            return [i % n + 1, Math.ceil((i + 1) / n)];
        }
        
        lastLetter = word.charAt(word.length - 1);
        calledWords.add(word);
        
        i += 1;
    }
    
    return [0, 0];
}