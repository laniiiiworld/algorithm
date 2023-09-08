function solution(land) {
    return Math.max(...land.reduce((acc, cur) => {
                            const [sumA, sumB, sumC, sumD] = acc;
                            const [a, b, c, d] = cur;
                            return [
                                Math.max(sumB, sumC, sumD) + a,
                                Math.max(sumA, sumC, sumD) + b,
                                Math.max(sumA, sumB, sumD) + c,
                                Math.max(sumA, sumB, sumC) + d,
                            ];
                        }, [0, 0, 0, 0])
                   );
}