function solution(n) {
    const answer = [];
    const move = (count, start, mid, end) => {
        if(count === 1) {
            answer.push([start, end]);
            return;
        }
        move(count - 1, start, end, mid);
        move(1, start, mid, end);
        move(count - 1, mid, start, end);
    };
    
    move(n, 1, 2, 3);
    
    return answer;
}