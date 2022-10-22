function solution(a, b, n) {
    let count = 0;
    let extra = 0;
    
    while(n >= a) {
        extra = n%a;
        n = (n-extra)/a*b;
        count += n;
        n += extra;
        extra = 0;
    }
    
    return count;
}