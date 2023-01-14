function solution(t, p) {
    const length = p.length;
    const number = parseInt(p);
    let count = 0;
    
    for(let i=0; i<t.length-length+1; i++) {
        if(parseInt(t.substr(i, length)) > number) continue;
        count += 1;
    }
    return count;
}