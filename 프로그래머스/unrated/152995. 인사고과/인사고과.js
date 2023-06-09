function solution(scores) {
    const maxScore = scores[0][0] + scores[0][1]; //완호 점수
    const arr = [];
    
    for(let index = 0; index < scores.length; index++) {
        const [a, b] = scores[index];
        
        if(a + b <= maxScore && index) continue; //완호보다 석차가 낮은 경우 제외
        if(scores.some(v => a < v[0] && b < v[1])) continue; //인센티브 대상X 제외
        
        arr.push(index);
    }
    
    return arr[0] === 0? arr.length : -1;
}