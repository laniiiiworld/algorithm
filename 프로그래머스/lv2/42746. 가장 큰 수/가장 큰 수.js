function solution(numbers) {
    const answer = numbers
                    .sort((a, b) => parseInt(`${b}${a}`) - parseInt(`${a}${b}`))
                    .join('');
    return answer[0] === '0' ? '0' : answer;
}