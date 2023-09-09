function solution(skill, skill_trees) {
    return skill_trees.reduce((acc, nowSkill) => {
        let checked = '';
        for(let i = 0; i < nowSkill.length; i++) {
            if(!skill.includes(nowSkill[i])) continue;
            checked += nowSkill[i];
        }
        const isInclude = skill.includes(checked);
        const isEnable = checked === '' || (isInclude && checked[0] === skill[0]);
        return acc += (isEnable? 1 : 0);
    }, 0);
}