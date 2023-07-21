function solution(s) {
    if(s.length === 1) return 1;
    
    const answer = new Set();
    
    for(let gap = 1; gap <= Math.floor(s.length / 2); gap++) {
        let beforeText = s.substr(0,gap);
        let nowText = '';
        let count = 1; //반복 횟수
        let compressed = ''; //압축된 문자열
        let index = gap;
        while(index < s.length) {
            nowText = s.substr(index, gap);
            if(beforeText === nowText) {
                count++;
            } else {
                if(count > 1) compressed += count;
                compressed += beforeText;
                count = 1;
            }
            beforeText = nowText;
            index += gap;
        }
        if(count > 1) compressed += count;
        compressed += s.slice(index - gap);

        answer.add(compressed);
    }
    
    return [...answer].sort((a, b) => a.length - b.length)[0].length;
}