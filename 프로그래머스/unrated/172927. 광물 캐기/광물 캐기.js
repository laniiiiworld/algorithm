function solution(picks, minerals) {
    let answer = 0;
    const fatigue = [[1, 1, 1], 
                     [5, 1, 1], 
                     [25, 5, 1]];
    const tools = picks
                    .reduce((acc, count, type) => {
                        for(let i = 0; i < count; i++) {
                            acc.push(type);
                        }                        
                        return acc;
                    }, []);
    const mineralIndexs = ['diamond', 'iron', 'stone'];
    const works = [];

    let start = 0;
    while(works.length < tools.length && start < minerals.length) {
        let hp = 0;
        const arr = [];
        for(let i = start; i < Math.min(minerals.length, start + 5); i++) {
            const mineral = mineralIndexs.indexOf(minerals[i]);
            hp += fatigue[2][mineral];
            arr.push(mineral);
        }
        works.push({hp, arr});
        start += 5;
    }
    
    works.sort((a, b) => a.hp - b.hp);
    tools.sort((a, b) => b - a);
    
    let index = 0;
    while(tools.length && works.length) {
        const arr = works.pop().arr;
        const tool = tools.pop();
        for(let i = 0; i < arr.length; i++) {
            answer += fatigue[tool][arr[i]];
        }
    }
    
    return answer;
}