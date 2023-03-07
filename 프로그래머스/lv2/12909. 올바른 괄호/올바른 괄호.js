function solution(str){
    let sum = 0;
    for(const s of str) {
        sum += (s === '(')? 1 : -1;
        if(sum < 0) return false;
    }
    return sum === 0;
}