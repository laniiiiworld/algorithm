function solution(arrayA, arrayB) {
    const getGCD = (a, b) => {
        while(a % b) {
            [a, b] = [b, a % b];
        }
        return b;
    };
    const gcdA = arrayA.reduce((gcd, v) => gcd = getGCD(gcd, v));
    const gcdB = arrayB.reduce((gcd, v) => gcd = getGCD(gcd, v));
    
    if((gcdA === 1 && gcdB === 1) || gcdA === gcdB) return 0;
    
    if(gcdA > gcdB) {
        if(arrayB.every(v => v % gcdA > 0)) return gcdA;
        if(gcdB > 1 && arrayA.every(v => v % gcdB > 0)) return gcdB;
    } else {
        if(arrayA.every(v => v % gcdB > 0)) return gcdB;
        if(gcdA > 1 && arrayB.every(v => v % gcdA > 0)) return gcdA;
    }
    
    return 0;
}