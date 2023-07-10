//중복순열
function solution(word) {
    let count = 0;
    let isEqual = false;
    const alphbets = ['A', 'E', 'I', 'O', 'U'];
    const dfs = (before) => {
        if(before === word) {
            isEqual = true;
            return;
        }
        
        count += 1;
        if(before.length === 5) return;
        
        for(let i = 0; i < alphbets.length; i++) {
            if(isEqual) return;
            dfs(`${before}${alphbets[i]}`);
        }
    };
    
    dfs('');
    
    return count;
}