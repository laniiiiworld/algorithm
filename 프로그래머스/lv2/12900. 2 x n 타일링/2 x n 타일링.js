function solution(n) {
    const dp = [1, 1];
    
    while(dp.length < n + 1) {
        dp.push((dp[dp.length - 2] + dp[dp.length - 1]) % 1_000_000_007);
    }
    
    return dp[n];
}