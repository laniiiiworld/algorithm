function solution(strs, t) {
    const dp = Array.from({ length: t.length + 1 }, () => Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= t.length; i += 1) {
        for (let j = 1; j < Math.min(i + 1, 6); j += 1) {
            const start = i - j;
            const end = i;
            if (strs.includes(t.slice(start, end))) {
                dp[i] = Math.min(dp[i], dp[i - j] + 1);
            }
        }
    }

    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
