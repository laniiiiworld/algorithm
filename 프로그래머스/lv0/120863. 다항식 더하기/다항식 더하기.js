function solution(polynomial) {
    const arr = polynomial.replaceAll('+','').split(' ');
    let x = 0;
    let n = 0;
    
    arr.forEach(value => {
        if(value.includes('x')) { //계수
            const num = value.replace('x', '');
            x += num? Number(num) : 1;
        }else {                   //상수
            n += value? Number(value) : 0;
        }
    });
    
    if(x > 0 && n > 0) return `${x>1? x : ''}x + ${n}`;
    
    return (x > 0)? `${x>1? x : ''}x` : `${n}`;
}