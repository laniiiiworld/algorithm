function solution(n, s) {
    const value = Math.floor(s / n);
    
    if(value === 0) return [-1];
    
    const rest = s % n;
    const answer = Array.from({length: n}, (_, i) => {
        if(rest && n - rest <= i) {
            return value + 1;
        }
        return value;
    });
    
    return answer;
}
