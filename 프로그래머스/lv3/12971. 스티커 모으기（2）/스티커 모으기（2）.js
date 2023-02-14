function solution(sticker) {
    if(sticker.length <= 3) return Math.max(...sticker);
    
    const dp1 = [sticker[0], Math.max(sticker[0], sticker[1])];
    const dp2 = [0, sticker[1], Math.max(sticker[1], sticker[2])];
    
    for(let i=2; i<sticker.length; i++) {
        if(i !== sticker.length - 1) {
            dp1.push(Math.max(dp1[i-1], dp1[i-2] + sticker[i]));
        }
        if(i !== 2) {
            dp2.push(Math.max(dp2[i-1], dp2[i-2] + sticker[i]));
        }
    }
    
    return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
}
