function solution(numbers) {
    const answer = new Set();
    const visited = Array(numbers.length).fill(false);
    const isFrime = (number) => {
        if(number < 2) return false;
        for(let i = 2; i * i <= number; i++) {
            if(number % i === 0) return false;
        }
        return true;
    };
    const dfs = (makedNumber) => {
        if(isFrime(Number(makedNumber))) answer.add(Number(makedNumber));
        if(makedNumber.length === numbers.length) return;
        
        for(let i = 0; i < numbers.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            dfs(`${makedNumber}${numbers[i]}`);
            visited[i] = false;
        }
    };
    
    dfs('');
    
    return answer.size;
}