function solution(arr1, arr2) {
    const M = arr1.length;
    const K = arr2.length;
    const N = arr2[0].length;
    const answer = Array.from({length: M}, () => new Array(N).fill(0));
    
    for(let m=0; m<M; m++) {
        for(let n=0; n<N; n++) {
            for(let k=0; k<K; k++) {
                answer[m][n] += arr1[m][k] * arr2[k][n];
            }
        }
    }
    
    return answer;
}