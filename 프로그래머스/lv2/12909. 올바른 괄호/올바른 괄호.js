function solution(s){
    let acc = 0;
    for(let i = 0; i < s.length; i++) {
        acc += (s[i] === '(')? 1 : -1;
        if(acc < 0) return false;
    }
    return acc === 0;
}