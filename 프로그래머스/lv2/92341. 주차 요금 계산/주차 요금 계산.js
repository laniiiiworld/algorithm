function solution(fees, records) {
    const answer = [];
    const [baseTime, basePrice, unitTime, unitPrice] = fees;
    const carNumbers = []; //계산된 차량 번호들을 저장하는 배열
    
    records = records.map(record => record.split(' '));
    
    //시각(시간:분)을 입력받아 분으로 변환해주는 함수
    const getMinute = (time) => {
        const [hour, minute] = time.split(':');
        return Number(hour)*60 + Number(minute);
    };
    //마지막 시각. 출차되지 않은 경우 계산에 필요
    const LAST_TIME = getMinute('23:59');
    
    for(let i=0; i<records.length; i++) {
        const [,car,] = records[i];
        if(carNumbers.includes(car)) continue;
        carNumbers.push(car);
        
        const list = records.filter(record => record[1] === car);
        //누적 주차시간(분)
        const totalTime = list.reduce((totalTime, item) => {
            const [time, , inout] = item;
            if(inout === 'IN') {
                totalTime += (LAST_TIME - getMinute(time));
            } else {
                totalTime -= (LAST_TIME - getMinute(time));
            }
            return totalTime;
        }, 0);
        //청구할 주차요금
        let totalFee = basePrice;
        if(totalTime > baseTime) {
            totalFee += Math.ceil((totalTime - baseTime)/unitTime) * unitPrice;
        }
        
        answer.push({car, totalFee});
    }
    
    return answer.sort((a, b) => a.car - b.car)
                 .map(item => item.totalFee);
}