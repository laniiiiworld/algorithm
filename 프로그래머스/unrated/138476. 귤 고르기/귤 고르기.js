function solution(k, tangerine) {
    const types = new Map();
    
    for(const value of tangerine) {
        const count = types.get(value) || 0;
        types.set(value, count + 1);
    }
    
    const sorted = [...types].sort((a, b) => a[1] - b[1]);
    let answer = 0;
    let poped = 0;
    
    while(poped < k) {
        poped += sorted.pop()[1];
        answer += 1;
    }
    
    return answer;
}