function solution(picks, minerals) {
    let answer = 0;
    const tools = ['diamond', 'iron', 'stone'];
    const toolsLength = picks.reduce((acc, cur) => acc += cur, 0);
    const MAX = Math.min(minerals.length, toolsLength * 5);
    const getUsedHP = (tool, start) => {
        const table = { 
                        'diamond' : {'diamond' : 1, 'iron' : 1, 'stone' : 1}
                      , 'iron' : {'diamond' : 5, 'iron' : 1, 'stone' : 1}
                      , 'stone' : {'diamond' : 25, 'iron' : 5, 'stone' : 1}
                      };
        let used = 0;
        for(let i = start; i < Math.min(minerals.length, start + 5); i++) {
            used += table[tool][minerals[i]];
        }
        return used;
    };
    
    const arr = [];
    let i = 0;
    while(i < MAX) {
        arr.push([i, getUsedHP('stone', i)]);
        i += 5;
    }
    
    arr.sort((a, b) => a[1] - b[1]);
    
    for(let i = 0; i < picks.length; i++) {
        let count = picks[i];
        while(count > 0 && arr.length) {
            const [start, usedHP] = arr.pop();
            answer += getUsedHP(tools[i], start);
            count -= 1;
        }
    }
    
    return answer;
}