function solution(skill, skill_trees) {
    const isPossible = (node) => {
        let index = 0;
        for(let i=0; i<node.length; i++) {
            const value = node.charAt(i);
            if(!skill.includes(value)) continue;
            if(value !== skill.charAt(index)) return false;
            index += 1;
        }
        return true;
    };
    let count = 0;
    
    for(const node of skill_trees) {
        if(isPossible(node)) count += 1;
    }
    
    return count;
}