function solution(numbers) {
    const n = numbers.length;
    const answer = Array(n).fill(-1);
    
    for(let i = 1; i < n; i++) {
        for(let j = i - 1; j >= 0; j--) {
            if(answer[j] > -1) continue;
            if(numbers[j] >= numbers[i]) break;
            answer[j] = numbers[i];
        }
    }
    
    return answer;
}
