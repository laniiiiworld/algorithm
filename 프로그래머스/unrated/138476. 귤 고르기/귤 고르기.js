function solution(k, tangerine) {
    let answer = 0;
    let count = 0;
    const types = new Map();
    
    tangerine.forEach(v => {
        types.set(v, (types.get(v)||0) + 1);
    });
    
    const arr = [...types].sort((a, b) => b[1] - a[1]);
    for(let i=0; i<arr.length; i++) {
        count += arr[i][1];
        answer++;
        if(count >= k) break;
    }
    
    return answer;
}