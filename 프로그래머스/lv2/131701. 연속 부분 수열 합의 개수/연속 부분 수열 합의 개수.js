function solution(elements) {
    var answer = 0;
    const len = elements.length;
    elements = [...elements  , ...elements.splice(0, elements.length -1)];
    const dp = new Array(elements.length + 1).fill(0);
    dp[0] = 0;
    for(let i = 0; i < elements.length; i++){
        dp[i + 1] += dp[i] + elements[i];
    }
    const set = new Set();
    set.add(dp[len]);
    for(let j = 1; j < len; j++){
        for(let i = 1; i < dp.length; i++){
            if(i + j >= dp.length) continue;
            set.add(dp[j + i] - dp[i]);        
        }
    }
    return set.size;
}