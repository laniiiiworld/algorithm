function solution(targets) {
    let answer = 0;
    let tail = -1;
    
    targets.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    
    for(const [s, e] of targets) {
        if (tail <= s) {
            answer++;
            tail = e;
        } else if (e < tail) {
            tail = e;
        }
    }
    
    return answer;
}