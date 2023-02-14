function solution(sticker) {
    if(sticker.length === 1) return sticker[0];
    const table1 = Array(sticker.length - 1).fill(0);
    const table2 = Array(sticker.length).fill(0);

    const getMaxSum = (isIncludeZero, n) => {
        if(isIncludeZero) {
            if(n === 0) return sticker[0];
            if(n === 1) return Math.max(sticker[0], sticker[1]);
            
            return Math.max(table1[n-1], table1[n-2] + sticker[n]);
        }
        
        if(n === 1) return sticker[1];
        if(n === 2) return Math.max(sticker[1], sticker[2]);
        
        return Math.max(table2[n-1], table2[n-2] + sticker[n]);
    };
    
    for(let i=0; i<sticker.length; i++) {
        if(i !== sticker.length - 1) table1[i] = getMaxSum(true, i);
        if(i !== 0) table2[i] = getMaxSum(false, i);
    }
    
    return Math.max(table1.pop(), table2.pop());
}
