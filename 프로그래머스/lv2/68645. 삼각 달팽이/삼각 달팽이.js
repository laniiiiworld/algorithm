function solution(n) {
    const numbers = Array.from({length: n}, (_, i) => new Array(i + 1).fill(0));
    let [x, y] = [-1, 0];
    let number = 0;
    let count = 0;
    
    for (let row = n; row > 0; row -= 3) {
        numbers[++x][y] = ++number;
        for (count = 0; count < row-1; count++) numbers[++x][y] = ++number;
        for (count = 0; count < row-1; count++) numbers[x][++y] = ++number;
        for (count = 0; count < row-2; count++) numbers[--x][--y] = ++number;
    }
    
    return numbers.flat();
}