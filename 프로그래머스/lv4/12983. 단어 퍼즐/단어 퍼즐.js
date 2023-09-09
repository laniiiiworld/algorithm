function solution(strs, t) {
    const dp = Array(t.length + 1).fill(Infinity);
    const strsSet = new Set(strs);
    dp[0] = 0;

    for (let i = 1; i <= t.length; i += 1) {
        for (let j = i - 1; j >= Math.max(i - 5, 0); j -= 1) {
            if (strsSet.has(t.slice(j, i))) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}