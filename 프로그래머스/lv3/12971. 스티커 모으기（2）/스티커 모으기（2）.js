function solution(sticker) {
    const n = sticker.length;
    
    if(n === 1) return sticker[0];
    if(n === 2) return Math.max(...sticker);
    
    const dp1 = Array(n).fill(0);
    const dp2 = Array(n).fill(0);
    
    dp1[0] = sticker[0];
    dp1[1] = Math.max(sticker[0], sticker[1]);
    for(let i = 2; i < n - 1; i++) {
        dp1[i] = Math.max(sticker[i] + dp1[i - 2], dp1[i - 1]);
    }
    
    dp2[1] = sticker[1];
    dp2[2] = Math.max(sticker[1], sticker[2]);
    for(let i = 3; i < n; i++) {
        dp2[i] = Math.max(sticker[i] + dp2[i - 2], dp2[i - 1]);
    }
    
    return Math.max(dp1[n - 2], dp2[n - 1]);
}