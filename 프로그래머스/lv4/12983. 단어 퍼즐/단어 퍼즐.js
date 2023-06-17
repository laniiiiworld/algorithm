function solution(strs, t) {
    const n = t.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 0; i < n; i++) {
        for(let j = Math.max(i - 5, 0); j <= i; j++) {
            const str = t.slice(j, i + 1);
            if(!strs.includes(str)) continue;
            if(dp[i + 1] <= dp[j] + 1) continue;
            dp[i + 1] = dp[j] + 1;
        }
    }
    
    return dp[n] === Infinity? -1 : dp[n];
}