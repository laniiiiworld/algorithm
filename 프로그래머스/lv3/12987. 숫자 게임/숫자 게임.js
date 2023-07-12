function solution(A, B) {
    let count = 0;
    
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
    
    for(const value of A) {
        if(value < B[0]) {
            B.shift();
            count += 1;
        } else if(B[B.length - 1] <= value) {
            B.shift();
        } else {
            B.pop();
            count += 1;
        }
    }
    
    return count;
}