function solution(land) {
    const sums = land.reduce((acc, row) => {
        const [sumA, sumB, sumC, sumD] = acc;
        const [a, b, c, d] = row;
        return [
                a + Math.max(sumB, sumC, sumD),
                b + Math.max(sumA, sumC, sumD),
                c + Math.max(sumA, sumB, sumD),
                d + Math.max(sumA, sumB, sumC)
               ];
    }, [0, 0, 0, 0]);
    
    return Math.max(...sums);
}