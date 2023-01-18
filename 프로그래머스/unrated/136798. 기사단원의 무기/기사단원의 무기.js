function solution(number, limit, power) {
    const getAliquotCount = (num) => {
        if(num === 1) return 1;
        
        let count = 0;
        const sqrt = Math.sqrt(num);
        for(let i=1; i<sqrt; i++) {
            count += (num%i)? 0 : 2;
        }
        
        return (Math.floor(sqrt) === sqrt)? count+1 : count;
    };
        
    return new Array(number)
            .fill(1)
            .map((v,i) => getAliquotCount(v+i))
            .reduce((sum, cur) => sum += (cur > limit)? power : cur, 0);
}