function solution(n, t, m, p) {
    let answer = '';
    let number = 0;
    let str = (number).toString(n);
    
    let i = p - 1;
    while(t > 0) {
        while(str.length <= i) {
            str += (++number).toString(n).toUpperCase();
        }
        answer += str[i];
        i += m;
        t -= 1;
    }
    
    return answer;
}