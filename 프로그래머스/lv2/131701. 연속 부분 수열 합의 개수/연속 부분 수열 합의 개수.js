function solution(elements) {
    const answer = new Set(elements);
    const n = elements.length;
    const arr = [...elements, ...elements];
    for(let i = 2; i <= n; i++) {
        let index = i;
        let sum = 0;
        while(index--) {
            sum += arr[index];
        }
        answer.add(sum);
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            sum -= arr[j - i];
            answer.add(sum);
        }
    }
    
    return answer.size;
}