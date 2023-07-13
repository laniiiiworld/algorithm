function solution(sticker) {
    const n = sticker.length;
    
    if(n === 1) return sticker[0];
    if(n === 2) return Math.max(sticker[0], sticker[1]);
    
    const dp1 = [sticker[0], Math.max(sticker[0], sticker[1])];
    const dp2 = [0, sticker[1]];
    
    for(let i = 2; i < n; i++) {
        if(i < n - 1) {
            dp1.push(Math.max(dp1[i - 2] + sticker[i], dp1[i - 1]));
        }
        dp2.push(Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]));
    }
    
    return Math.max(dp1[n - 2], dp2[n - 1]);
}