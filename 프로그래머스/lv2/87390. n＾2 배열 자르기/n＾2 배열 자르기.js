function solution(n, left, right) {
    const answer = [];

    while (left++ <= right) {
        const a = left % n;
        const b = Math.ceil(left / n);
        
        if (!a) answer.push(n);
        else if (a < b) answer.push(b);
        else if (a < n) answer.push(a);
    }

    return answer;
}