function solution(records) {
    const names = new Map();
    const answer = [];
    for(const record of records) {
        const [command, id, nickname] = record.split(' ');
        
        if(command === 'Leave') {
            answer.push(`${id}님이 나갔습니다.`);
            continue;
        }
        
        names.set(id, nickname);
        
        if(command === 'Enter') {
            answer.push(`${id}님이 들어왔습니다.`);
        }
    }
    
    return answer.map(sentence => {
        const id = sentence.substr(0, sentence.indexOf('님'));
        return sentence.replace(id, names.get(id));
    });
}