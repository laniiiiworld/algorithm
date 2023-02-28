function solution(elements) {
    const sums = new Set(elements);
    const numbers = [...elements, ...elements];
    for(let length=2; length<=elements.length; length++) {
        for(let i=0; i<elements.length; i++) {
            const sum = numbers.slice(i, i+length).reduce((sum, cur) => sum += cur);
            sums.add(sum);
        }
    }
    return sums.size;
}