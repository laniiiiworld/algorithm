function solution(record) {
    const messages = {
                        'Enter': '님이 들어왔습니다.', 
                        'Leave': '님이 나갔습니다.'
                     };
    const result = [];
    const user = new Map();
    
    for(const text of record) {
        const [type, id, name] = text.split(' ');
        
        if(type !== 'Leave') user.set(id, name);
        if(type === 'Change') continue;
        
        result.push([id, messages[type]]);
    }
    
    return result.map(([id, message]) => `${user.get(id)}${message}`);
}