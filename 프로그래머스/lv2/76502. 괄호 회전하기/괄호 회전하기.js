function solution(s) {
    const isRight = (text) => {
        const indexs = {'[': 0, ']': 0, '(': 1, ')': 1, '{': 2, '}': 2};
        const values = {'[': [1, 0, 0], '(': [0, 1, 0], '{': [0, 0, 1]};
        const stack = [];
        const result = [0, 0, 0];

        for(let i = 0; i < text.length; i++) {
            const value = text[i];
            const index = indexs[value];
            const last = stack[stack.length - 1];
            
            if(value === '[' || value === '(' || value === '{') {
                stack.push(values[value]);
                result[index] += 1;
            } else {
                if(stack.length === 0) return false;
                if(last[index] === 0) return false;
                stack.pop();
                result[index] -= 1;
            }
        }
        
        return result.reduce((acc, cur) => acc += cur, 0) === 0;
    };
    
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(!isRight(s.slice(i) + s.slice(0, i))) continue;
        answer += 1;
    }
    
    return answer;
}