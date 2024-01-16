function solution(prices) {
    const n = prices.length;
    const dp = Array(prices.length).fill(0);
    
    const stack = [];
    for(let i = 0; i < n; i++) {
        if(stack.length === 0 || stack[stack.length - 1].value <= prices[i]) {
            stack.push({value: prices[i], index: i});
            continue;
        }
        while(stack.length && stack[stack.length - 1].value > prices[i]) {
            const {index} = stack.pop();
            dp[index] = i - index;
        }
        stack.push({value: prices[i], index: i});
    }
    
    for(let i = 0; i < stack.length; i++) {
        const {index} = stack[i];
        dp[index] = stack[stack.length - 1].index - index;
    }
    
    return dp;
}