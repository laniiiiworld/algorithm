function solution(n, results) {
    // gragh[a][b]
    //  0: 경기 정보가 없다.
    //  1: a가 b에게 이겼다.
    // -1: a가 b에게 졌다.
    const gragh = Array.from({length: n+1}, () => Array(n+1).fill(0));
    for (const [won,lost] of results) {
        gragh[won][lost] = 1;
        gragh[lost][won] = -1;
    }
    
    //플로이드 워샬 알고리즘
    for (let k=1; k<=n; k++) {
        for (let a=1; a<=n; a++) {
            for (let b=1; b<=n; b++) {
                if (gragh[a][b] !== 0) continue;
                // 경기정보가 입력되지 않은 경우 경기결과 유추
                if (gragh[a][k] === 1 && gragh[k][b] === 1) {
                    gragh[a][b] = 1;
                }else if (gragh[a][k] === -1 && gragh[k][b] === -1) {
                    gragh[a][b] = -1;
                }
            }
        }
    }
    
    return gragh.filter(a => a.filter(b => !b).length === 2).length;
}