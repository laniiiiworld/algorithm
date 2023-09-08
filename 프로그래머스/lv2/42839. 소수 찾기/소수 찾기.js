function solution(numbers) {
    const numberList = new Set();
    const visited = Array(numbers.length).fill(false);
    const makeNumbers = (number) => {
        if(number && Number(number) !== 0 && Number(number) !== 1) {
            numberList.add(Number(number));
        }
        
        for(let i = 0; i < numbers.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            makeNumbers(`${number}${numbers[i]}`);
            visited[i] = false;
        }
    };
    
    makeNumbers('');
    
    let answer = 0;
    const isDecimal = (number) => {
        for(let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0) return false;
        }
        return true;
    };
    for(const value of numberList) {
        if(!isDecimal(value)) continue;
        answer += 1;
    }
    
    return answer;
}