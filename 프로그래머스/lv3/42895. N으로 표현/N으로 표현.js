function solution(N, number) {
    const MAX = 8;
    const dp = Array.from({length: MAX + 1}, (_, i) => {
        const value = Number(String(N).repeat(i));
        const mySet = new Set();
        mySet.add(value);
        return mySet;
    });
    
    for(let i = 1; i <= MAX; i++) {
        for(let j = 1; j < i; j++) {
            for(const first of dp[j]) {
                for(const second of dp[i - j]) {
                    dp[i].add(first + second);
                    dp[i].add(first - second);
                    dp[i].add(first * second);
                    if(first === 0 || second === 0) continue;
                    dp[i].add(Math.floor(first/second));
                }
            } 
        }
        if(dp[i].has(number)) return i;
    }
    
    return -1;
}