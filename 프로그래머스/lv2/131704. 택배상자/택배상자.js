function solution(order) {
    let answer = 0;
    let main = 1;
    const sub = [];
    
    for(const box of order) {
        while(main < box) {
            sub.push(main++);
        }
        
        if(main !== box && (!sub.length || sub[sub.length - 1] !== box)) break;
        
        if(main === box) {
            answer += 1;
            main += 1;
            continue;
        }
        
        sub.pop();
        answer += 1;
    }
    
    return answer;
}