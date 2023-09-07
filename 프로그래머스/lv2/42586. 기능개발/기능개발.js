function solution(progresses, speeds) {
    const remainedWork = [];
    for(let i = 0; i < progresses.length; i++) {
        const remained = (100 - progresses[i]) / speeds[i];
        remainedWork.push(Math.ceil(remained));
    }
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