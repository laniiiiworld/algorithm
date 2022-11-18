function solution(msg) {
    const answer = [];
    const table = new Array(26).fill(0).map((v,i) => String.fromCodePoint(i+65));
    const LZW = (now, index) => {
        const next = msg[index];
        const tableIndex = table.indexOf(now+next);
        if( tableIndex === -1) {
            answer.push(table.indexOf(now)+1);
            table.push(now+next);
        } else {
            index = LZW(now+next, index+1);
        }
        return index;
    };
    
    let i = 0;
    while(i < msg.length-1) {
        i = LZW(msg[i], i+1);
    }
    
    if(i < msg.length){
        answer.push(table.indexOf(msg[i])+1);
    }
    
    return answer;
}