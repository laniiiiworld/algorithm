function solution(n) {
    const dp = Array(n+1).fill(0);
    
    dp[1] = 1;
    dp[2] = 2;
    
    if(n < 3) return dp[n];
    
    let i = 3;
    while(i <= n) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1_000_000_007;
        i += 1;
    }
    
    return dp[n] % 1_000_000_007;
}