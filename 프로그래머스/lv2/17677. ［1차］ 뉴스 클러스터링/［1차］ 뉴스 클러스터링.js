function solution(str1, str2) {
    const getMultipleSets = (str) => {
        const arr = [];
        const strs = new Map();
        
        for(let i=1; i<str.length; i++) {
            const s = str.substr(i-1, 2).toLowerCase();
            if(s.length > s.replace(/[^a-z]/g, '').length) continue;
            const count = strs.get(s) + 1 || 1;
            strs.set(s, count);
            arr.push(`${s}${count}`);
        }
        
        return arr.sort();
    };
    
    const arr1 = getMultipleSets(str1);
    const arr2 = getMultipleSets(str2);
    
    if(arr1.length === 0 && arr2.length === 0) return 65536;
    
    const commonLength = arr1.length + arr2.length - new Set([...arr1, ...arr2]).size;
    const allLength = arr1.length + arr2.length - commonLength;
    
    return Math.floor(commonLength / allLength * 65536);
}