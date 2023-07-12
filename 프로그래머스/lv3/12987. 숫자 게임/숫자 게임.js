function solution(A, B) {
    let count = 0;
    let start = 0;
    let end = B.length - 1;
    
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
    
    for(const value of A) {
        if(value < B[start]) {
            start += 1;
            count += 1;
        } else if(B[end] <= value) {
            start += 1;
        } else {
            end -= 1;
            count += 1;
        }
    }
    
    return count;
}