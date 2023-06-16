function solution(numbers) {
    const n = numbers.length;
    const answer = Array(n).fill(-1);
    
    for(let i = n - 2; i >= 0; i--) {
        for(let j = i + 1; j < n; j++) {
            if(numbers[i] > numbers[j]) {
                if(answer[j] == -1) {
                    answer[i] = -1;
                    break;
                } else if(numbers[i] < answer[j]) {
                    answer[i] = answer[j];
                    break;
                }
            } else if(numbers[i] < numbers[j]) {
                answer[i] = numbers[j];
                break;
            } else {
                answer[i] = answer[j];
                break;
            }
        }
    }
          
    return answer;
}