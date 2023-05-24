function solution(data, col, row_begin, row_end) {
    return data
            .sort((a, b) => a[col - 1] - b[col - 1] || b[0] - a[0])
            .slice(row_begin - 1, row_end)
            .map((row, index) => row.reduce((acc, cur) => acc += cur % (index + row_begin), 0))
            .reduce((acc, cur) => acc ^= cur, 0);
}