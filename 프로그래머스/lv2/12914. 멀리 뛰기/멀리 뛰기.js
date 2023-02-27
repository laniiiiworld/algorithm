function solution(n) {
    if(n === 1) return 1;
    
    let numbers = [1, 2];
    while(numbers.length < n) {
        const a = numbers[numbers.length - 2];
        const b = numbers[numbers.length - 1];
        numbers.push((a + b)  % 1234567);
    }
    
    return numbers[numbers.length - 1];
}