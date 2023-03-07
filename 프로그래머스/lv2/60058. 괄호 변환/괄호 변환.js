function solution(p) {
    const isCorrect = (str) => {
        let sum = 0;
        for(let index = 0; index < str.length; index++) {
            sum += (str[index] === '(')? 1 : -1;
            if(sum < 0) return false;
        }
        return sum === 0;
    };
    const separateString = (str) => {
        let index = 0;
        let sum = 0;
        while(index < str.length) {
            sum += (str[index++] === '(')? 1 : -1;
            if(sum === 0) break;
        }
        return [str.slice(0, index), str.slice(index)];
    };
    const getCorrectString = (w) => {
        if(w === '') return '';
        let str = '';
        let [u, v] = separateString(w);
        if(isCorrect(u)) {
            str = `${u}${getCorrectString(v)}`;
        } else {
            u = u.slice(1, u.length - 1)
                 .split('')
                 .map(value => (value === '(' ? ')' : '('))
                 .join('');
            str = `(${getCorrectString(v)})${u}`;
        }
        return str;
    };
    
    return getCorrectString(p);
}