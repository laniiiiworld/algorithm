function solution(records) {
    const message = {
                     'Enter' : '님이 들어왔습니다.',
                     'Leave' : '님이 나갔습니다.'
                    };
    const names = new Map();
    const answer = [];
    
    for(const record of records) {
        const [command, id, nickname] = record.split(' ');
        
        if(command !== 'Change') {
            answer.push([id, command]);
        }    
        if(nickname) {
            names.set(id, nickname);
        }
    }
    
    return answer.map(([id, command]) => `${names.get(id)}${message[command]}`);
}