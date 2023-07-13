function solution(number, k) {
    const numbers = number.split('').map(Number);
    const result = [];
    
    for(const value of numbers) {
        while(k && result.length && result[result.length - 1] < value) {
            result.pop();
            k -= 1;
        }
        result.push(value);
    }
    
    const answer = result.join('');
    return k? answer.slice(0, answer.length - k) : answer;
}