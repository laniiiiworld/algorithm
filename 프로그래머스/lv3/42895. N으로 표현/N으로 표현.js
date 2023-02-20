function solution(N, number) {
    if(N === number) return 1;
    const MAX = 8;
    const dp = Array.from(new Array(MAX+1), (_, index) => {
        const repeatedNumber = Number(String(N).repeat(index));
        return new Set([repeatedNumber]);
    });
    
    for(let i=1 ; i<=MAX ; ++i) {
        for(let j=1 ; j<i ; ++j) {
            for(let first of dp[j]) {
                for(let second of dp[i-j]) {
                    dp[i].add(first+second);
                    dp[i].add(first-second);
                    dp[i].add(first*second);
                    if(first === 0 || second === 0) continue;
                    dp[i].add(Math.floor(first/second));
                }
            } 
        }
        if(dp[i].has(number)) return i;
    }
    
    return -1;
}