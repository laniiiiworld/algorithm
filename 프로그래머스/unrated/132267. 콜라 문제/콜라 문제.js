function solution(a, b, n) {
    let count = 0;

    while(n >= a) {
        const extra = n%a;
        n = (n-extra)/a*b;
        count += n;
        n += extra;
    }

    return count;
}