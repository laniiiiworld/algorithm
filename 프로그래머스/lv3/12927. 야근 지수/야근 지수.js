function solution(n, works) {
    const m = works.length;
    const total = works.reduce((acc, cur) => acc += cur, 0);
    
    if(total <= n) return 0;
    
    works.sort((a, b) => a - b);
    
    let answer = 0;
    let rest = total - n;
    let share = Math.ceil(rest / m);
    
    for(let i = 0; i < m; i++) {
        let now = Math.min(works[i], share);
        rest -= now;
        share = Math.ceil(rest / (m - i - 1));
        answer += now * now;
    }
    
    return answer;
}