function solution(n) {
    let answer = 0;
    for(const value of n.toString(2)) {
        answer += Number(value);
    }
    return answer;
}