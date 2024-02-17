function solution(n, tops) {
    const exceptedTable = Array(n).fill(0);
    const includedTable = Array(n).fill(0);
    exceptedTable[0] = tops[0]? 3 : 2;
    includedTable[0] = tops[0]? 4 : 3;
    
    const getCount = (count, index) => {
        const excepted = exceptedTable[index] * count;
        const affected = (includedTable[index] - exceptedTable[index]) * (count - 1);
        return (excepted + affected) % 10007;
    };
    
    for(let i = 1; i < n; i++) {
        const exceptedCount = tops[i]? 3 : 2;
        const includedCount = tops[i]? 4 : 3;
        exceptedTable[i] = getCount(exceptedCount, i - 1);
        includedTable[i] = getCount(includedCount, i - 1);
    }
    
    return includedTable[n - 1];
}