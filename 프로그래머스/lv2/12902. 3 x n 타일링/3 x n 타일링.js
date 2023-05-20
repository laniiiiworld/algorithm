function solution (n) {
    if(n % 2) return 0;
    
    const dp = [0, 3, 11];
    
    for(let i = 3; i * 2 <= n; i++) {
        dp[i] = dp[i - 1] * 3 + 2;
        
        for(let j = 1; j < i - 1; j++) {
            dp[i] += dp[j] * 2;
        }

        dp[i] %= 1_000_000_007;
    }
    
    return dp[n / 2];
}