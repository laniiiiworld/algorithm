function solution(scores) {
  let answer = 0;
  const wanho = scores[0];
    
  scores = scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
    
  let max = 0;
  for(let i = 0 ; i < scores.length; i++) {
    const score = scores[i];
    if (score[1] < max) {
      if (score[0] === wanho[0] && score[1] === wanho[1]) return -1;
    } else {
      max = Math.max(max, score[1]);
      if (score[0] + score[1] > wanho[0] + wanho[1]) answer++;
    }
  }
    
  return answer + 1;
}