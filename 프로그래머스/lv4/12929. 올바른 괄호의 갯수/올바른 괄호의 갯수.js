function solution(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        for(let j = i; j > 0; j--) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    
    return dp[n];
}