function solution(s) {
    if(s.length <= 1) return 1;
    const n = s.length;
    const dp = Array.from({length: n}, () => Array(n).fill(0));
    
    dp[0][0] = 1;
    for(let index = 1; index < n; index++) {
        dp[index][index] = 1;
        if(s[index - 1] === s[index]) {
             dp[index - 1][index] = 2;
        }
    }
    
    for(let start = n - 2; start >= 0; start--) {
        for(let end = start + 1; end < n; end++) {
            if(s[start] === s[end]) {
                if(start + 1 === n || end - 1 < 0) continue;
                if(dp[start + 1][end - 1] === 0) continue;
                dp[start][end] = dp[start + 1][end - 1] + 2;
            }
        }
    }

    return dp.reduce((acc, row) => acc = Math.max(acc, ...row), 0);
}