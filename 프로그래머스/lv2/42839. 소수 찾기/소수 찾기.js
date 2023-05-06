function solution(numbers) {
    const answer = new Set();
    const n = numbers.length;
    const visited = Array(n).fill(false);
    const graph = numbers.split('');
    const isPrime = (a) => {
        if(a < 2) return false;
        for(let i = 2; i * i <= a; i++) {
            if(a % i === 0) return false;
        }
        
        return true;
    };
    const dfs = (text) => {
        if(isPrime(Number(text))) {
            answer.add(Number(text));
        }
        if(text.length === n) return;
        
        for(let i = 0; i < n; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            dfs(text + graph[i]);
            visited[i] = false;
        }
    };
    
    dfs('');
    
    return answer.size;
}