function solution(land) {
    return Math.max(...land.reduce((sum, row) => {
        return [
            row[0] + Math.max(sum[1], sum[2], sum[3]),  
            row[1] + Math.max(sum[0], sum[2], sum[3]),
            row[2] + Math.max(sum[0], sum[1], sum[3]),
            row[3] + Math.max(sum[0], sum[1], sum[2]),
        ];
    }, [0, 0, 0, 0]));
}