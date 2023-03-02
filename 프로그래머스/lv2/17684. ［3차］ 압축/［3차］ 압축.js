function solution(msg) {
    const answer = [];
    const codeA = 'A'.charCodeAt(0);
    const dictionary = Array.from({length:26}, (_,i) => String.fromCodePoint(i+codeA));
    const LZW = (now, index) => {
        const next = msg[index];
        if( dictionary.indexOf(now+next) > -1) {
            return LZW(now+next, index+1);
        }
        
        answer.push(dictionary.indexOf(now)+1);
        if(next) dictionary.push(now+next);

        return index;
    };

    let i = 0;
    while(i < msg.length) {
        i = LZW(msg.charAt(i), i+1);
    }

    return answer;
}