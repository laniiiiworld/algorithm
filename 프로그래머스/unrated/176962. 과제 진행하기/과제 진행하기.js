function solution(plans) {
    const answer = [];
    const hash = {};
    const convertTime = (str) => {
        let [h,m] = str.split(':').map(Number);
        return h * 60 + m;
    };
    
    plans.forEach(el => {
        el[1] = convertTime(el[1]);
        el[2] = Number(el[2]);

        hash[el[1]] = [el[2], el[0]];
    })

    plans.sort((a, b) => a[1] - b[1]);

    const stack =[];
    let startTime = plans[0][1];
    let finish = 0;
    
    while(finish < plans.length) {
        if(hash[startTime]) {
            stack.push(hash[startTime]);
        }
        if(stack.length) {
            stack[stack.length-1][0]--;
            if(stack[stack.length-1][0] === 0) {
                answer.push(stack[stack.length-1][1]);
                stack.pop();
                finish++;
            }
        }
        startTime++;
    }

    return answer;
}