function solution(survey, choices) {
    const types = ['RT', 'CF', 'JM', 'AN'];
    const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    survey.forEach((type, index) => {
        const choice = choices[index];
        if(choice <= 4) {
            scores[type.charAt(0)] += 4 - choice;
        } else {
            scores[type.charAt(1)] += choice % 4;
        }
    });
    
    return types.map(([a, b]) => (scores[a] >= scores[b]) ? a : b).join('');
}