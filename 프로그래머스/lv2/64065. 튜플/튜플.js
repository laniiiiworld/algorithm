function solution(s) {
    const arr = s.split(',{')
                 .map(text => text.replace(/{|}/g, '').split(',').map(Number))
                 .sort((a, b) => a.length - b.length);
    const answer = [arr[0][0]];
    
    for(let i = 1; i < arr.length; i++) {
        const items = arr[i];
        
        for(const value of answer) {
            const index = items.indexOf(value);
            if(index === -1) continue;
            items[index] = 0;
        }
        
        answer.push(items.filter(v => v)[0]);
    }
    
    return answer;
}