function solution(n) {
    const dp = Array(n + 1).fill(1);
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1_000_000_007;
    }
    return dp[n];
}