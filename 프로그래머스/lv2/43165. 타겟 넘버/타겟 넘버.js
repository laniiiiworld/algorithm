function solution(numbers, target) {
    let answer = 0;
    const dfs = (sum, index) => {
        if(index === numbers.length) {
            answer += (sum === target)? 1 : 0;
            return;
        }
        dfs(sum + numbers[index], index + 1);
        dfs(sum - numbers[index], index + 1);
    };
    
    dfs(0, 0);
    
    return answer;
}