function solution(number, k) {
    const length = number.length - k;
    const stack = [number[0]];
    
    for(let i = 1; i < number.length; i++) {
        while(k && stack.length && stack[stack.length - 1] < number[i]) {
            stack.pop();
            k -= 1;
        }
        stack.push(number[i]);
    }
    
    return stack.slice(0, length).join('');
}