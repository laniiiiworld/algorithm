function solution(numbers, target) {
    let answer = 0;
    const makeNumber = (sum, index) => {
        if(index === numbers.length) {
            answer += (sum === target)? 1 : 0;
            return;
        }
        
        makeNumber(sum + numbers[index], index + 1);
        makeNumber(sum - numbers[index], index + 1);
    };
    
    makeNumber(0, 0);
    
    return answer;
}