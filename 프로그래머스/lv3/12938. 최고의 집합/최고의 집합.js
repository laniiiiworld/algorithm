function solution(n, s) {
    const nums = [];
    for(let i=0; i<n; i++) {
        if(i >= n - s % n) {
            nums.push(Math.ceil(s/n));
            continue;
        }
        nums.push(Math.floor(s/n));
    }
    return n <= s? nums : [-1];
}