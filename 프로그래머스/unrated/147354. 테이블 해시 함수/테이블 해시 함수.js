function solution(data, col, row_begin, row_end) {
    data.sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0]);
    
    let answer = 0;
    for(let i = row_begin - 1; i < row_end; i++) {
        answer ^= data[i].reduce((acc, cur) => acc += cur % (i + 1), 0);
    }
    
    return answer;
}