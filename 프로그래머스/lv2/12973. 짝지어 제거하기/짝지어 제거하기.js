function solution(s) {
    const stack = [];
    
    for(const value of s) {
        if(stack.length === 0) {
            stack.push(value);
            continue;
        }
        if(stack[stack.length - 1] === value) {
            stack.pop();
        } else {
            stack.push(value);
        }
    }
    
    return stack.length? 0 : 1;
}