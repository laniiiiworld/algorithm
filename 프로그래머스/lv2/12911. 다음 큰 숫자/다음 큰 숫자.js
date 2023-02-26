function solution(n) {
    let str = n.toString(2);
    let number = n;
    const count = str.replaceAll('0','').length;
    
    while(number <= n || str.replaceAll('0','').length !== count) {
        str = (++number).toString(2);
    }
    
    return number;
}