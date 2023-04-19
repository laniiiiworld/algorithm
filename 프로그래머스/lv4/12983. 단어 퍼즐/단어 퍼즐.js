function solution(strs, t) {
    const dp = Array(t.length + 1).fill(Infinity);
    dp[0]= 0;
    
    for(let i = 0; i <= t.length; i++) {
        for(let j = Math.min(i, 5); j >= 0; j--) {
            if(!strs.includes(t.slice(i - j, i))) continue;
            dp[i] = Math.min(dp[i], dp[i - j] + 1);
        }
    }
    
    return dp[t.length] === Infinity? -1 : dp[t.length];
}