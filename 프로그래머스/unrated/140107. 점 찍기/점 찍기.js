function solution(k, d) {
    let count = ~~(d / k) * 2 + 1;
    
    for(let i = k; i <= d; i += k) {
        count += ~~(Math.sqrt(d * d - i * i) / k);
    }
    
    return count;
}