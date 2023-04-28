function solution(n) {
    let answer = '';
    const base = ['4', '1', '2'];
    
    while(n > 0) {
        answer = base[n % 3] + answer;
        n = ~~((n - 1) / 3);
    }
    
    return answer;
}