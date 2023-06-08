function solution(begin, end) {
    const getMaxNumber = (a) => {
        if(a === 1) return 0;
        
        let result = a;
        const sqrt = Math.floor(Math.sqrt(a));
        
        for(let i = 2; i <= sqrt; i++) {
            if(a % i) continue;
            if(a / i > 10_000_000) {
                result = i;
                continue;
            }
            result = a / i;
            break;
        }
        
        return result === a? 1 : result;
    };
    const answer = [];
    
    for(let a = begin; a <= end; a++) {
        answer.push(getMaxNumber(a));
    }
    
    return answer;
}