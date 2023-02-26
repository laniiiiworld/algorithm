function solution(s) {
    const stack = [];
    
    for(let i=0; i<s.length; i++) {
        if(!stack.length || s[i] !== stack[stack.length - 1]) {
            stack.push(s[i]);
            continue;
        }
        stack.pop();
    }
    
    return stack.length === 0? 1 : 0;
}