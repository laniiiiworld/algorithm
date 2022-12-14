function solution(polynomial) {
    const arr = polynomial.replaceAll('+','').split(' ');
    let x = 0;
    let n = 0;
    
    arr.forEach(value => {
        if(value.includes('x')) { //ęłě
            const num = value.replace('x', '');
            x += num? Number(num) : 1;
        }else {                   //ěě
            n += value? Number(value) : 0;
        }
    });
    
    if(x > 0 && n > 0) return `${x>1? x : ''}x + ${n}`;
    
    return (x > 0)? `${x>1? x : ''}x` : `${n}`;
}