function solution(targets) {
    let answer = 1;
    targets.sort((a, b) => a[1] - b[1]);
    targets.sort((a, b) => a[0] - b[0]);

    let e = targets[0][1];

    for(const i of targets) {
        if(e > i[0]) {
            e = Math.min(i[1], e);
        } else {
            answer++;
            e = i[1];
        }
    }

    return answer;
}