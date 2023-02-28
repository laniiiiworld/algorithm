function solution(n, works) {
    works.sort((a, b) => b - a);
    let before = [works[0]];
    let i = 1;
    
    while(n > 0 && works[works.length - 1]) {
        while(before[before.length - 1] === works[i]) {
            before.push(works[i]);
            i += 1;
        }
        
        const gap = works[i]? before[before.length - 1] - works[i] : before[before.length - 1];
        const length = Math.min(before.length, n);
        const minus = (gap * length > n)? 1 : gap;
        for(let j=0; j<length; j++) {
            before[j] -= minus;
            works[j] -= minus;
        }
        
        n -= minus * length;
    }
    
    return works.reduce((sum, work) => {
        if(work > 0) {
            sum += Math.pow(work, 2);
        }
        return sum;
    }, 0);
}