function solution(progresses, speeds) {
    let before = 0;
    return progresses
                .map((progress, index) => {
                    return Math.ceil((100 - progress) / speeds[index]);
                })
                .reduce((answer, day) => {
                    if(day <= before) {
                        answer[answer.length - 1]++;
                    } else {
                        before = day;
                        answer = [...answer, 1];
                    }
                    return answer;
                }, []);
}