function solution(queue1, queue2) {
    const maxIndex = queue1.length * 2 - 1;
    let count = 0;
    let sum1 = queue1.reduce((sum, num) => sum+num, 0);
    let sum2 = queue2.reduce((sum, num) => sum+num, 0);
    let start1 = 0;
    let start2 = 0;
    let firstEl = 0;
    
    while(sum1 !== sum2) {
        if(start1 >= maxIndex && start2 >= maxIndex) return -1;
        count++;
        
        if(sum1 > sum2) {
            firstEl = queue1[start1++];
            queue2.push(firstEl);
            sum1 -= firstEl;
            sum2 += firstEl;
        } else {
            firstEl = queue2[start2++];
            queue1.push(firstEl);
            sum1 += firstEl;
            sum2 -= firstEl;
        }
    }
    
    return count;
}