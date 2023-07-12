function solution(numbers) {
    const changeNumber = (number) => {
        let binary = number.toString(2);
        let i = binary.length; // 가장 앞에 있는 0의 index
        
        while(i-- > 0) {
            if(binary[i] === '0') break;
        }
        
        if(i === -1) { // 0이 없었다면 10을 붙인다.
            binary = '10' + binary.slice(1);
        } else {       // 0이 있다면
            let plus = '';
            if(i < binary.length - 1) {
                // 해당 index 다음에 있는 1을 0으로 바꾸고
                plus = '0' + binary.slice(i + 2);
            }
            // 해당 index의 0은 1로 바꾼다.
            binary = binary.slice(0, i) +'1'+ plus;
        }
        
        return parseInt(binary, 2);
    };
    
    return numbers.map(v => changeNumber(v));
}