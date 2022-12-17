function solution(n, k) {
    const answer = [];
    const peoples = new Array(n).fill(1).map((_,i) => _+i);
    const repetition = new Array(n).fill(1);
    
    for(let i=1; i<n; i++) {
        repetition[i] = repetition[i-1] * i;
    }
    
    while(peoples.length) {
        const repeatCount = repetition.pop();
        const index = Math.floor((k - 1) / repeatCount);
        answer.push(...peoples.splice(index, 1));
        k %= repeatCount;
    }
    
    return answer;
}