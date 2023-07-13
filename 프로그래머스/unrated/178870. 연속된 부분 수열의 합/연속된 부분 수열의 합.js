function solution(sequence, k) {
    const n = sequence.length;
    let [start, end] = [0, n];
    let [s, e] = [0, 0];
    let sum = 0;
    
    while(s < n) {
        while(sum < k && e < n) {
            sum += sequence[e++];
        }
        if(sum === k && end - start + 1 > e - s) {
            [start, end] = [s, e - 1];
        }
        sum -= sequence[s++];
    }
    
    return [start, end];
}