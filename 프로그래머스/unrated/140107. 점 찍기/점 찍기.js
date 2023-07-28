function solution(k, d) {
    let answer = Math.floor(d / k) * 2 + 1;
    
    for(let a = k; a <= d; a += k) {
        const b = Math.sqrt(d * d - a * a);
        answer += Math.floor(b / k);
    }
    
    return answer;
}
