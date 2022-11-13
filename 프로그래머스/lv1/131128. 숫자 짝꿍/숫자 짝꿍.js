function solution(X, Y) {
    const bothExisted = new Array(10).fill(0);
    const xExisted = new Array(10).fill(0);
    
    for(let i=0; i<X.length; i++) {
        xExisted[Number(X.charAt(i))]++;
    }
    
    for(let i=0; i<Y.length; i++) {
        const index = Number(Y.charAt(i));
        if(xExisted[index] === 0) continue;
        bothExisted[index]++;
        xExisted[index]--;
    }
    
    const answer = bothExisted.map((count, number) => ({count, number: String(number)}))
                              .filter(item => item.count)
                              .sort((a, b) => b.number - a.number)
                              .map(item => (item.number).repeat(item.count))
                              .join('');
    return !answer? '-1' : ( (answer[0] === '0')? '0' : answer);
}