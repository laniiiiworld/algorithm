function solution(n,a,b) {
    let round = 0;
    
    while (a !== b) {
        round += 1;
        
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
    
    return round;
}