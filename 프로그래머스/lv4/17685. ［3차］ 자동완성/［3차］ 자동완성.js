function solution(words) {
    let answer = 0;
    const makeTrie = () => {
        const root = new Map();
        for(const word of words) {
            let current = root;
            for(const letter of word) {
                const item = current.get(letter) || {count: 0, next: new Map()};
                current.set(letter, {...item, count : item.count + 1});
                current = item.next;
            }
        }
        return root;
    };
    
    const root = makeTrie();
    for(const word of words) {
        let current = root;
        for(const letter of word) {
            answer += 1;
            const {count, next} = current.get(letter);
            if(count === 1) break;
            current = next;
        }
    }
    
    return answer;
}