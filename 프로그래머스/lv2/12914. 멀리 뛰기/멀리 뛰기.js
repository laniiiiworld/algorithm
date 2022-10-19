function solution(n) {
    const stack = [1];
    while(stack.length < n) {
        const a = stack[stack.length - 2] || 1;
        const b = stack[stack.length - 1];
        stack.push((a + b) % 1234567);
    }
    return stack[stack.length - 1];
}