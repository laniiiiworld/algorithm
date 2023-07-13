function solution(p) {
    const isRightString = (s) => {
        let result = 0;
        for(let i = 0; i < s.length; i++) {
            if(result < 0) return false;
            if(s[i] === '(') {
                result += 1;
            } else {
                result -= 1;
            }
        }
        return result === 0;
    };
    const getBalancedStrings = (s) => {
        let count = s[0] === '('? 1 : -1;
        
        for(let i = 1; i < s.length; i++) {
            if(count === 0) return [s.slice(0, i), s.slice(i)];
            count += s[i] === '('? 1 : -1;
        }
        
        return [s, ''];
    };
    const getNewString = (s) => {
        let result = '';
        for(let i = 1; i < s.length - 1; i++) {
            result += s[i] === '('? ')' : '(';
        }
        return result;
    };
    const updateString = (w) => {
        if(w === '') return '';
        const [u, v] = getBalancedStrings(w);
        if(isRightString(u)) {
            return u + updateString(v);
        } else {
            return '(' + updateString(v) + ')' + getNewString(u);
        }
    };
    
    return updateString(p);
}