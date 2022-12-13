function solution(n, stations, w) {
    let answer = 0;
    let bfStation = 0;
    const width = w*2 + 1;
    
    for(let i=0; i<stations.length; i++) {
        const distance = (i === 0)? w + 1 : width;
        const count = Math.ceil((stations[i] - bfStation - distance)/width);
        if(count > 0) answer += count;
        bfStation = stations[i];
    }
    
    if(bfStation < n - w) {
        answer += Math.ceil((n - bfStation - w)/width);
    }
    
    return answer;
}