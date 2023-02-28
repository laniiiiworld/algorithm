function solution(s) {
    const answer = new Set();
    const arr = s.replaceAll('{{', '')
                 .split('},{')
                 .map(value => value.split(','))
                 .sort((a, b) => a.length - b.length);
    
    for(const item of arr) {
        for(const value of item) {
            answer.add(parseInt(value));
        }
    }
    
    return [...answer];
}