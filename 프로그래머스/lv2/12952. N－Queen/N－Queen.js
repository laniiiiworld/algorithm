function solution(n) {
    let count = 0;
    const queen = Array(n).fill(0); //index : 행, queen[index] : 열
    const check = (row) => {
        for(let i=0; i<row; i++) {
            if(queen[i] === queen[row] || Math.abs(queen[i] - queen[row]) === (row - i)) {
                return false;
            }
        }
        return true;
    };
    const search = (row) => {
        if(row === n) count += 1;

        for(let col=0; col<n; col++) {
            queen[row] = col;
            if(!check(row)) continue;
            search(row+1);
        }
    };

    search(0);

    return count;
}