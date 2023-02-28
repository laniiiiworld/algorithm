function solution(s) {
    const answer = new Set();
    const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
                 .sort((a, b) => a.length - b.length);
    
    for(const item of arr) {
        for(const value of item) {
            answer.add(parseInt(value));
        }
    }
    
    return [...answer];
}