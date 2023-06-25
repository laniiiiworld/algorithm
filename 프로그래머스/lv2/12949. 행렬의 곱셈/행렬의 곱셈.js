function solution(arr1, arr2) {
    const a = arr1.length;
    const b = arr1[0].length;
    const c = arr2[0].length;
    const answer = Array.from({length: a}, () => Array(c).fill(0));
    
    for(let i = 0; i < a; i++) {
        for(let k = 0; k < c; k++) {
            for(let j = 0; j < b; j++) {
                answer[i][k] += arr1[i][j] * arr2[j][k];
            }
        }
    }
    
    return answer;
}