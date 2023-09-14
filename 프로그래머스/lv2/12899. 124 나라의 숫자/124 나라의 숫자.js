function solution(n) {
    let answer = '';
    const rule = ['4', '1', '2'];
    while(n > 3){
        answer = rule[n % 3] + answer;
        n = (n % 3)? Math.floor(n / 3) : Math.floor(n / 3) - 1;
    }
    return rule[n % 3] + answer;
}
