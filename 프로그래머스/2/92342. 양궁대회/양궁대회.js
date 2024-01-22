function solution(n, info) {
    let result = [[]];
    let maxGap = 0;
    const dfs = ({arrow, start, lion}) => {
        if(arrow === 0) {
            const lionIndexs = lion.map(([index, _]) => index);
            const lionScore = lionIndexs.reduce((acc, index) => acc += (10 - index), 0);
            let apeachScore = 0;
            for(let i = 0; i < info.length; i++) {
                if(lionIndexs.includes(i) || info[i] === 0) continue;
                apeachScore += (10 - i);
            }
            
            const gap = lionScore - apeachScore;
            if(apeachScore >= lionScore || maxGap > gap) return;
            
            let a = 0;
            let b = 0;
            for(let i = info.length - 1; i >= 0; i--) {
                const hasAnswer = result.find(([index, _]) => index === i);
                const hasLion = lionIndexs.find(v => v === i);
                if(!hasAnswer && hasLion) {
                    b += 1;
                }
                if(hasAnswer && !hasLion) {
                    a += 1;
                }
            }
            if(maxGap === gap && a > b) return;
            
            maxGap = gap;
            result = [...lion];
            
            return;
        }
        
        for(let i = start; i < info.length; i++) {
            const isLast = i === info.length - 1;
            const count = isLast? arrow : info[i] + 1;
            if(!isLast && arrow < count) continue;
            dfs({
                arrow: arrow - count, 
                start: i + 1, 
                lion: [...lion, [i, count]]
                });
        }
    };
    
    dfs({
        arrow: n, 
        start: 0, 
        lion: []
        });
    if(maxGap === 0) return [-1];
    
    const answer = Array(info.length).fill(0);
    for(const [index, count] of result) {
        answer[index] = count;
    }
    
    return answer;
}
