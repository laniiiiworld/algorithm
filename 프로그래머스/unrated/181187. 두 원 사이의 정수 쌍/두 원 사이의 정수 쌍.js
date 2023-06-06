function solution(r1, r2) {
    const getLength = (b, a, isInclude) => {
        if(b < a) return 0;
        const length = Math.sqrt(b * b - a * a);
        if(Math.floor(length) === 0) return 0;
        if(!isInclude) return Math.floor(length);
        return Math.floor(length) === length? length - 1 : Math.floor(length);
    };
    let count = 0;
    
    for(let y = 1; y < r2; y++) {
        const x1 = getLength(r1, y, true);
        const x2 = getLength(r2, y, false);
        count += x2 - x1;
    }
    
    return count * 4 + (r2 - r1 + 1) * 4;
}