function solution(a) {
    const visited = new Set();
    const stack = [Infinity, ...a].sort((a, b) => b - a);
    const getMinValue = () => {
        while(visited.has(stack[stack.length - 1])) {
            stack.pop();
        }
        return stack[stack.length - 1];
    };

    let answer = 0;
    let leftMin = a[0];
    
    visited.add(a[0]);

    for(let i = 1; i < a.length; i++) {
        visited.add(a[i]);
        if(leftMin < a[i] && a[i] > getMinValue(i)) {
            answer += 1;
        }
        leftMin = leftMin < a[i]? leftMin : a[i];
    }
    
    return a.length - answer;
}