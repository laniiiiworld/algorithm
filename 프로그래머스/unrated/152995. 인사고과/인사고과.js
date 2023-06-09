function solution(scores) {
    const wanho = scores[0];
    let answer = 1;
    let maxScore = 0;
    const wanhoSum = wanho[0] + wanho[1];

    scores.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    for(let score of scores){
        if(score[1] < maxScore) {
            if(score === wanho) return -1;
        } else {
            maxScore = Math.max(maxScore, score[1]);
            if(score[0] + score[1] > wanhoSum){
                answer++;
            }
        }
    }
    
    return answer;
}