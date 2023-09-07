function solution(progresses, speeds) {
    const remainedWork = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    remainedWork.push(Infinity);
    
    const answer = [];
    let now = remainedWork[0];
    let count = 0;
    for(const day of remainedWork) {
        if(day <= now) {
            count += 1;
        } else {
            answer.push(count);
            now = day;
            count = 1;
        }
    }
    
    return answer;
}