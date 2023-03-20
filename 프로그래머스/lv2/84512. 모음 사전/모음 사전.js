function solution(word) {
    const dictionary = ['A', 'E', 'I', 'O', 'U'];
    const n = dictionary.length;
    let isFind = false;
    let count = -1;
    
    const dfs = (letters) => {
        count += 1;
        isFind = letters === word;
        
        if (letters.length === n || isFind) return;

        for (let i = 0; i < n; i++) {
            if (isFind) break;
            dfs(letters + dictionary[i]);
        }
    };
    
    dfs('');

    return count;
}