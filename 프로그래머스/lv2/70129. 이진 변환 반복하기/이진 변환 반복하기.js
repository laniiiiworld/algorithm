function solution(s) {
    const removeAllZero = (text) => text.replaceAll('0', '');
    let changeCount = 0;
    let removeCount = 0;
    
    while(s !== '1') {
        changeCount += 1;
        removeCount += s.length;
        s = removeAllZero(s);
        removeCount -= s.length;
        s = s.length.toString(2);
    }
    
    return [changeCount, removeCount];
}