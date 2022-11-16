function solution(elements) {
    const base = [...elements, ...elements];
    const sums = new Set();
    let count = 1;
    
    while(count < elements.length) {
        for(let i=0; i<elements.length; i++) {
            const sum = base.slice(i, i+count)
                            .reduce((acc, cur) => acc += cur, 0);
            sums.add(sum);
        }
        count++;
    }
    sums.add( elements.reduce((acc, cur) => acc += cur, 0) );
    
    return sums.size;
}