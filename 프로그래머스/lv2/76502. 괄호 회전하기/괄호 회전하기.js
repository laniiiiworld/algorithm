//올바른 괄호 여부 확인 함수
function isCorrect(str) {
    const all = ['(','[','{',')',']','}'];
    const left = ['(','[','{'];
    const sum = [0,0,0];
    let stack = []; //열어주는 괄호들의 index를 저장하는 배열
    
    for(let i=0; i<str.length; i++) {
        const index = all.indexOf(str[i]) % 3;

        if(left.indexOf(str[i]) > -1) {
            sum[index] += 1;
            stack.push(index);
        } else {
            //괄호를 열기 전에 닫으려 하는 경우 X
            if(stack.length === 0) return 0;
            //열어주는 괄호와 짝이 맞지 않은 경우 X
            if(index !== stack[stack.length-1]) return 0;
            sum[index] -= 1;
            stack.pop();
        }
    }
    
    //열어주는 괄호들이 모두 닫히지 않은 경우 X
    return sum.filter(value => value !== 0).length? 0 : 1;
}

function solution(s) {
    const sLength = s.length;
    let count =0;
    s += s;
    
    for(let start=0; start<sLength; start++) {
        count += isCorrect(s.slice(start, start + sLength));
    }
    
    return count;
}