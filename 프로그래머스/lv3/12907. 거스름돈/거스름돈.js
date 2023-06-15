function solution(n, money) {
    const dp = Array.from({length: n + 1}, (_, i) => (i % money[0]) ? 0 : 1);

    for(let i = 1; i < money.length; i++) {
        for(let j = money[i]; j <= n; j++) {
            dp[j] += dp[j - money[i]];
        }
    }

    return dp[n] % 1_000_000_007;
}