function solution(k, m, score) {
    const apples = score.sort((a, b) => b - a);
    const stack = [];
    
    for(let i=m-1; i<apples.length; i+=m) {
        stack.push(apples[i]);
    }
    
    return stack.reduce((acc, cur) => acc += cur*m, 0);
}