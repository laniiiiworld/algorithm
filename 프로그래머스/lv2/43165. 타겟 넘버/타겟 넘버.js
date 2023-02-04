function solution(numbers, target) {
    let count = 0;
    const makeTargetNumber = (index, sum) => {
        if(index === numbers.length) {
            count += (sum === target)? 1 : 0;
            return;
        }
        makeTargetNumber(index + 1, sum + numbers[index]);
        makeTargetNumber(index + 1, sum - numbers[index]);
    };
    
    makeTargetNumber(0, 0);
    
    return count;
}