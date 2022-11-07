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
    //누적 주차시간(분)을 구하는 함수
    const getTotalTime = (list) => {
        let totalTime = 0;
        for(let i=0; i<list.length; i++) {
            const [time, , inout] = list[i];
            if(inout === 'IN') {
                totalTime -= getMinute(time);
                if(i === list.length-1) {
                    totalTime += LAST_TIME;
                }
            } else {
                totalTime += getMinute(time);
            }   
        }
        return totalTime;
    };
    //청구할 주차요금을 구하는 함수
    const getTotalFee = (totalTime) => {
        if(totalTime <= baseTime) return basePrice;
        return basePrice + Math.ceil((totalTime - baseTime) / unitTime) * unitPrice;
    };
    
    for(let i=0; i<records.length; i++) {
        const [,car,] = records[i];
        if(carNumbers.includes(car)) continue;
        carNumbers.push(car);
        
        const list = records.filter(record => record[1] === car);
        const totalTime = getTotalTime(list);
        const totalFee = getTotalFee(totalTime);
        answer.push({car, totalFee});
    }
    
    return answer.sort((a, b) => a.car - b.car).map(item => item.totalFee);
}