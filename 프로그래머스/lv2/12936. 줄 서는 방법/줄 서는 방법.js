function solution(n, k) {
    const answer = [];
    const N = n;
    const visited = Array(n).fill(false);
    const numbers = Array.from({length: n}, (_, i) => i + 1);
    const getNumber = (order) => {
        if(order === -1) {
            const index = visited.lastIndexOf(false);
            visited[index] = true;
            return numbers[index];
        }
        
        for(let i = 0; i < N; i++) {
            if(visited[i]) continue;
            
            order -= 1;
            if(order > 0) continue;
            
            visited[i] = true;
            return numbers[i];
        }
    };
    const dp = [1, ...numbers];
    
    for(let i = 1; i <= N; i++) {
        dp[i] = dp[i] * dp[i - 1];
    }
    
    while(n >= 1) {
        const mok = dp[n - 1];
        const order = k? Math.ceil(k / mok) : -1;
        const number = getNumber(order);
        answer.push(number);
        n -= 1;
        k = k % mok;
    }
    
    return answer;
}