function solution(arrayA, arrayB) {
    const getGCD = (a, b) => (a % b)? getGCD(b, a % b) : b;
    const gcdA = arrayA.reduce((gcd, v) => gcd = getGCD(gcd, v));
    const gcdB = arrayB.reduce((gcd, v) => gcd = getGCD(gcd, v));

    if(gcdA === gcdB) return 0;
    if(gcdA < gcdB && arrayA.some(v => (v % gcdB) === 0)) return 0;
    if(gcdA > gcdB && arrayB.some(v => (v % gcdA) === 0)) return 0;

    return Math.max(gcdA, gcdB);
}