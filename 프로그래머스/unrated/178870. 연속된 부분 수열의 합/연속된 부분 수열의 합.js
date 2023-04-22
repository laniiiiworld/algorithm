function solution(sequence, k) {
    const n = sequence.length;
    let answer = [0, n];
    let sum = 0;
    let start = 0;
    let end = 0;
    
    while(start < n) {
        while(end < n && sum < k) {
            sum += sequence[end++];
        }
        if(sum === k && end - start < answer[1] - answer[0] + 1) {
            answer = [start, end - 1];
        }
        sum -= sequence[start++];
    }
    
    return answer;
}