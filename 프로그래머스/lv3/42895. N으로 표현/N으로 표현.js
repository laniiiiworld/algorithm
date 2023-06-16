function solution(N, number) {
    const MAX = 8;
    const dp = Array.from({length: MAX + 1}, (_, i) => {
        const mySet = new Set();
        mySet.add(Number(String(N).repeat(i)));
        return mySet;
    });
    
    for(let count = 1; count <= MAX; count++) {
        for(let i = count - 1; i > 0; i--) {
            for(const a of dp[i]) {
                for(const b of dp[count - i]) {
                    const calculated = [a + b, a - b, a * b, Math.floor(a / b)];
                    for(const result of calculated) {
                        dp[count].add(result);
                    }
                }
            }
        }
        
        if(dp[count].has(number)) {
            return count;
        }
    }
    
    return -1;
}