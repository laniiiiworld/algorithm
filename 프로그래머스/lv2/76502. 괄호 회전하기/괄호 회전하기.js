function solution(s) {
    const left = ['[', '{', '('];
    const right = [']', '}', ')'];
    const isCorrect = (str) => {
        let sum = 0;
        const stack = [];
        for(let i=0; i<str.length; i++) {
            const now = str.charAt(i);
            if(left.includes(now)) {
                sum += 1;
                stack.push(left.indexOf(now));
            } else {
                sum -= 1;
                if(sum < 0) return false;
                const nowIndex = right.indexOf(now);
                if(stack[stack.length - 1] - nowIndex === 0) {
                    stack.pop();
                } else {
                    stack.push(-nowIndex);
                }
            }
        }
        return sum === 0 && stack.length === 0;
    };
    
    let answer = 0;
    for(let i=0; i<s.length; i++) {
        const str = s.slice(i) + s.slice(0, i);
        if(isCorrect(str)) answer += 1;
    }
    return answer;
}