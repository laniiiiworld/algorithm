function solution(s) {
    const count = [0, 0];
    
    while(s !== '1') {
        let str = '';
        for(let i=0; i<s.length; i++) {
            if(s[i] === '0') {
                count[1] += 1;
                continue;
            }
            str += '1';
        }
        s = (str.length).toString(2);
        count[0] += 1;
    }
    
    return count;
}