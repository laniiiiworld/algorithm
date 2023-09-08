function solution(n) {
    const dp = Array(n + 1).fill(1);
    
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1_000_000_007;
    }
    
    return dp[n] % 1_000_000_007;
}