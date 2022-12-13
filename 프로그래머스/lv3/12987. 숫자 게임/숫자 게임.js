function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let sum = 0;
    while(A.length) {
        const a = A.pop();
        const b = B[B.length - 1];
        if(a < b) {
            sum++;
            B.pop();
        } else {
            B.shift();
        }
    }
    
    return sum;
}