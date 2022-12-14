function solution(n) {
    const arr = Array.from(Array(n), (item, i) => Array(i+1).fill(0));
    const getMax = (n) => {
        let sum = 0;
        for(let i=1; i<=n; i++) {
            sum += i;
        }
        return sum;
    };
    const max = getMax(n);
    let num = 0;
    let [x, y] = [0, -1];
    let flag = 'D';
    
    while(num < max) {
        if(flag === 'D'){
            arr[++y][x] = ++num;
            if(y === n-1 || arr[y+1][x]) flag = 'R';
        } else if(flag === 'R') {
            arr[y][++x] = ++num;
            if(x === arr[y].length - 1 || arr[y][x+1]) flag = 'U';
        } else {
            arr[--y][--x] = ++num;
            if(arr[y-1][x-1]) flag = 'D';
        }
    }
    
    return arr.reduce((acc, row) => [...acc, ...row], []);
}