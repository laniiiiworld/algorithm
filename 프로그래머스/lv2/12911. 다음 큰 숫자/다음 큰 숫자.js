function solution(n) {
    let answer = n;
    let count = n.toString(2).match(/1/g).length;
    let result = 0;
    
    while(result !== count) {
        answer += 1;
        result = answer.toString(2).match(/1/g).length;
    }
    
    return answer;
}