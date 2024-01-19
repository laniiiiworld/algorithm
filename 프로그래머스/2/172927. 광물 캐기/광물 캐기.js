function solution(picks, minerals) {
    const items = [];
    const pushItems = (count, item) => {
        for(let i = 0; i < count; i++) items.push(item);
    };
    pushItems(picks[0], 'diamond');
    pushItems(picks[1], 'iron');
    pushItems(picks[2], 'stone');
    
    const table = {
        diamond: {diamond: 1, iron: 1, stone: 1},
        iron: {diamond: 5, iron: 1, stone: 1},
        stone: {diamond: 25, iron: 5, stone: 1}
    };
    const minusHp = (start, item) => {
        let result = 0;
        for(let i = start; i < Math.min(start + 5, minerals.length); i++) {
            const mineral = minerals[i];
            result += table[item][mineral];
        }
        return result;
    };
    
    const sortedDesc = [];
    for(let i = 0; i < Math.min(minerals.length, items.length * 5); i+= 5) {
        sortedDesc.push({start: i, value: minusHp(i, 'stone')});
    }
    sortedDesc.sort((a, b) => b.value - a.value);
    
    let answer = 0;
    for(let i = 0; i < sortedDesc.length; i++) {
        answer += minusHp(sortedDesc[i].start, items[i]);
    }
    
    return answer;
}