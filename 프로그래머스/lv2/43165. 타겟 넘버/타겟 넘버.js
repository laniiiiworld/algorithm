function solution(numbers, target) {
    let answer = 0;
    const dfs = (acc, index) => {
        if(index === numbers.length) {
            answer += (acc === target)? 1 : 0;
            return;
        }
        dfs(acc + numbers[index], index + 1);
        dfs(acc - numbers[index], index + 1);
    };
    
    dfs(0, 0);
    
    return answer;
}