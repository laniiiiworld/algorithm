function solution(n, money) {
    const dp = Array(n + 1).fill(0);

    dp[0] = 1;
    
    for (const m of money){
        for (let i = m; i < dp.length; i++){
            dp[i] = (dp[i] + dp[i - m]) % 1_000_000_007;
        }
    }
    
    return dp[n] % 1_000_000_007;
}