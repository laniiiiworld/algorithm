function solution(n, words) {
    const setAnswer = (index) => [(index) % n + 1, Math.ceil((index + 1) / n)];
    const talked = new Set();
    let last = words[0][0];
    
    for(let i = 0; i < words.length; i++) {
        const word = words[i];
        if(word[0] !== last) return setAnswer(i);
        if(talked.has(word)) return setAnswer(i);
        
        last = word[word.length - 1];
        talked.add(word);
    }
    
    return [0, 0];
}