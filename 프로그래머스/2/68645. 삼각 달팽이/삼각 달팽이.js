function solution(n) {
    const arr = Array.from({length: n}, (_, i) => Array(i + 1).fill());
    let row = -1;
    let col = 0;
    let fill = 0;

    for (let i = n; i > 0; i -= 3) {
        arr[++row][col] = ++fill;
        for (let j = 0; j < i - 1; j++) arr[++row][col] = ++fill;
        for (let j = 0; j < i - 1; j++) arr[row][++col] = ++fill;
        for (let j = 0; j < i - 2; j++) arr[--row][--col] = ++fill;
    }

    return arr.flat();
}