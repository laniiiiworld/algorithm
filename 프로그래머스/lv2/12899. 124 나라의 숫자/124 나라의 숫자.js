function solution(n) {
    const answer = [];
    const base = [4, 1, 2];
    
    while(n >= 1) {
        answer.push(base[n % 3]);
        n = n % 3? Math.floor(n / 3) : Math.floor((n - 1) / 3);
    }
    
    return answer.reverse().join('');
}