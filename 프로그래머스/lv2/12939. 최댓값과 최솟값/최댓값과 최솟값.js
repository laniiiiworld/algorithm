function solution(s) {
    const numbers = s.split(' ').map(Number);
    let max = -Infinity;
    let min = Infinity;
    
    for(const value of numbers) {
        max = (max < value)? value : max;
        min = (min > value)? value : min;
    }
    
    return `${min} ${max}`;
}