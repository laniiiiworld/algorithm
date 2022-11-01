function solution(n, works) {
    works.sort((a, b) => b - a);
    let index = 0;
    
    while(n > 0) {
        while(works[index] < works[index - 1]) index--;
        while(works[index] <= works[index + 1]) index++;
        if(works[index] === 0) break;
        works[index]--;
        n--;
    }
    
    let answer = BigInt(0);
    for(const work of works) {
        answer += BigInt(work) * BigInt(work);
    }
    
    return answer;
}