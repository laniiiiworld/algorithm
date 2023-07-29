function solution(w, h) {
    const slope = w / h;
    let count = 0;
    
    for(let i = 1; i <= w; i++) {
        count += Math.ceil(i / slope);
    }
    
    return ((w * h) - count) * 2;
}