function solution(n, money) {
    const dp = Array(n + 1).fill(0);

    for(let i = 0; i <= n; i++) {
        dp[i] = (i % money[0]) ? 0 : 1;
    }
    
    for(let i = 1; i < money.length; i++) {
        for(let j = money[i]; j <= n; j++) {
            dp[j] += dp[j - money[i]];
        }
    }
    
    return dp[n] % 1_000_000_007;
}