function solution(n, left, right) {
    const answer = [];
    const start = [Math.floor(left/n)+1 , left % n + 1];
    const end = [Math.floor(right/n)+1 , right % n + 1];
    
    let [row, col] = start;
    while(row <= end[0]) {
        while(
              (row < end[0] && col <= n) ||
              (row === end[0] && col <= end[1])
             ) {
            if(col<=row) answer.push(row);
            else         answer.push(col);
            col += 1;
        }
        row += 1;
        col = 1;
    }
    return answer;
}