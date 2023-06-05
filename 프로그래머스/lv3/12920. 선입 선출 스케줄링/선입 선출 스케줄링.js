function solution(n, cores) {
    let left = 0;
    let right = Math.max(...cores) * n;
    let time = 0;
    let m = 0; //time까지 처리한 작업량
    const getWorkCount = (time, cores) => {
        if(time === 0) {
            return cores.length;
        }
        return cores.reduce((acc, core) => acc += Math.floor(time / core), cores.length);
    };
    
    while (left <= right) {  
        const mid = Math.floor((left + right) / 2);
        const count = getWorkCount(mid, cores);
        
        if (count >= n) {
            right = mid - 1;   
            time = mid;     
            m = count; 
        } else {
            left = mid + 1;
        }
    }
    
    let answer = cores.length;
    while(answer--) {
        if (time % cores[answer] > 0) continue;
        if (m === n) break;
        m--;
    }
    
    return answer + 1;
}