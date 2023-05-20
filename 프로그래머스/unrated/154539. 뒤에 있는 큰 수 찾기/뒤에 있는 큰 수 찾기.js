function solution(numbers) {
    const n = numbers.length;
    const dp = Array(n).fill(-1);
    const stack = [0];
    
    for(let i = 1; i < n; i++) {
        const now = numbers[i];
        while(stack.length) {
            const before = numbers[stack[stack.length - 1]];
            if(before >= now) break;
            dp[stack.pop()] = now;
        }
        stack.push(i);
    }
    
    return dp;
}