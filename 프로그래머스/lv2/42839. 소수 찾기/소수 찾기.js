function solution(numbers) {
    const answer = new Set();
    const visited = Array(numbers.length).fill(false);
    const isPrime = (number) => {
        if(number < 2) return false;
        for(let i=2; i*i<=number; i++) {
            if(number % i === 0) return false;
        }
        return true;
    };
    const dfs = (fixed) => {
        answer.add(Number(fixed));
        
        for(let i=0; i<numbers.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            dfs(`${fixed}${numbers[i]}`);
            visited[i] = false;
        }
    };
    
    dfs('0');
    
    return [...answer].filter(v => isPrime(v)).length;
}