function solution(strs, t) {
    const n = t.length;
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 1; i <= t.length; i++) {
        for(let j = 1; j <= Math.min(5, i); j++) {
            const text = t.slice(i - j, i);
            if(strs.includes(text)) {
                dp[i] = Math.min(dp[i], dp[i - j] + 1);
            }
        }
    }
    
    return dp[n] === Infinity? -1 : dp[n];
}