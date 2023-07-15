function solution(strs, t) {
    const n = t.length;
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;
    
    for(let i = 0; i <= n; i++) {
        for(let j = i; j >= Math.max(i - 5, 0); j--) {
            const text = t.slice(j, i);
            
            if(!strs.includes(text)) continue;
            
            dp[i] = Math.min(dp[i], dp[j] + 1);
        }
    }
    
    return dp[n] === Infinity? -1 : dp[n];
}