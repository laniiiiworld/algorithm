function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    
    let count = 0;
    let now = days[0];
    for(const value of days) {
        if(now >= value) {
            count += 1;
        } else {
            answer.push(count);
            count = 1;
            now = value;
        }
    }
    answer.push(count);
    
    return answer;
}