function solution(survey, choices) {
    const scores = [3, 2, 1, 0, 1, 2, 3];
    const testResult = {RT: 0, CF: 0, JM: 0, AN: 0};
    const types = ['RT', 'CF', 'JM', 'AN'];
    const plusType = ['T', 'F', 'M', 'N'];
    
    const setTestResult = (score, alphabet) => {
        const type = types.find(t => t.split('').includes(alphabet));
        if(plusType.includes(alphabet)) {
            testResult[type] += score;
        }else {
            testResult[type] -= score;
        }
    };
    
    survey.forEach((type, index) => {
        const checkIndex = choices[index] - 1;
        if(checkIndex < 4) {
            setTestResult(scores[checkIndex], type.charAt(0));
        } else {
            setTestResult(scores[checkIndex], type.charAt(1));
        }
    });
    
    return types.map(type => (testResult[type] > 0) ? type[1] : type[0])
                .join('');

}