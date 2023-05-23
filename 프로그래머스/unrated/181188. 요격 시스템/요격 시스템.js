function solution(targets) {
    let count = 0;
    let start = 0;
    let end = 0;
    
    targets.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    
    for(const [s, e] of targets) {
        if(s < end) {
            start = s;
            end = Math.min(end, e);
            continue;
        }
        start = s;
        end = e;
        count += 1;
    }
    
    return count;
}