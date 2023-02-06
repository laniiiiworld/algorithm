function solution(name) {
    const codeA = 'A'.charCodeAt(0);
    const codeZ = 'Z'.charCodeAt(0);
    let countUpAndDown = 0;
    let countLeftRight = name.length - 1;
    
    // up and down count
    for(const letter of name) {
        const codeLetter = letter.charCodeAt(0);
        countUpAndDown += Math.min(codeLetter - codeA, codeZ - codeLetter + 1);
    }
    
    if(name.indexOf('A') === -1) return countUpAndDown + countLeftRight;
    
    //left and right count
    for(let startIndex=0; startIndex<name.length; startIndex++) {
        const letter = name[startIndex];
        
        if(letter !== 'A') continue;
        
        let lastIndex = startIndex;
        while(name[lastIndex + 1] === 'A') lastIndex += 1;
        
        const left = (startIndex > 0)? startIndex - 1 : 0;
        const right = name.length - 1 - lastIndex;
        const count = (left < right)? (left*2 + right) : (left + right*2);
        countLeftRight = Math.min(countLeftRight, count);
        
        startIndex = lastIndex + 1;
    }
    
    return countUpAndDown + countLeftRight;
}