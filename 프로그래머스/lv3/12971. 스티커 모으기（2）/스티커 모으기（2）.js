function solution(sticker) {
    const n = sticker.length;
    
    if(n === 1) return sticker[0];
    
    const dp1 = [sticker[0], Math.max(sticker[0], sticker[1])];
    const dp2 = [0, sticker[1]];
    
    for(let i = 2; i < n; i++) {
        dp2.push(Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]));
        if(i === n - 1) continue;
        dp1.push(Math.max(dp1[i - 2] + sticker[i], dp1[i - 1]));
    }
    
    return Math.max(dp1[n - 2], dp2[n - 1]);
}