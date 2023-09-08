function solution(record) {
    const answer = [];
    const friends = new Map();
    const messages = {
        Enter: '님이 들어왔습니다.',
        Leave: '님이 나갔습니다.'
    };
    
    for(const row of record) {
        const [type, id, name] = row.split(' ');
        if(type !== 'Change') {
            answer.push([type, id]);
        }
        if(type !== 'Leave') {
            friends.set(id, name);
        }
    }
    
    return answer.map(([type, id]) => `${friends.get(id)}${messages[type]}`);
}