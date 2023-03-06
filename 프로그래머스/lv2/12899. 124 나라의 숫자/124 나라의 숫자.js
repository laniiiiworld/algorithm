function solution(n) {
    let answer = '';
    const rule = ['4','1','2'];
    while(n > 0) {
        answer = rule[n % 3] + answer;
        n = (n % 3)? Math.floor(n / 3) : Math.floor(n / 3) - 1;
    }
    return answer;
}