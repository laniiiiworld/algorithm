function solution(sequence, k) {
    const n = sequence.length;
    const checkGap = (start, end, result) => {
        if(end - start - 1 < result[1] - result[0]) return true;
        return false;
    };
    let answer = [0, n];
    let [start, end] = [0, 0];
    let sum = 0;
    
    while(start < n) {
        while(sum < k && end < n) {
            sum += sequence[end++];
        }
        if(sum === k && checkGap(start, end, answer)) {
            answer = [start, end - 1];
        }
        sum -= sequence[start++];
    }
    
    return answer;
}