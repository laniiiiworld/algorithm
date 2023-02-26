function solution(n) {
    if(n === 1) return 1;
    
    let count = 0;
    let left = 1;
    let right = 1;
    let sum = 1;
    
    while(left <= right) {
        if(sum < n) {
            sum += ++right;
        } else {
            if(sum === n) {
                count += 1;
            }
            sum -= left++;
        }
    }
    
    return count;
}