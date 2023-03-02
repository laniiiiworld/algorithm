function solution(fees, records) {
    const answer = [];
    const cars = new Map();
    const [baseTime, baseFee, unitTimeMi, unitFee] = fees;
    const getTotalFee = (mi) => {
        const time = mi - baseTime;
        if(time <= 0) return baseFee;
        return baseFee + Math.ceil(time/unitTimeMi) * unitFee;
    };
    
    for(const info of records) {
        const [time, number, inout] = info.split(' ');
        const infos = cars.get(number) || [];
        cars.set(number, [...infos, info]);
    }
    
    for(const number of [...cars.keys()].sort((a, b) => a - b)) {
        const infos = cars.get(number);
        if(infos.length % 2) infos.push(`23:59 ${number} OUT`);
        let totalTimes = [0, 0];
        
        for(const info of infos) {
            const [time, number, inout] = info.split(' ');
            let [hh, mi] = time.split(':').map(value => parseInt(value));
            hh = (hh + Math.floor(mi / 60));
            mi = mi % 60;
            
            totalTimes[0] += (inout === 'IN')? -hh : hh;
            totalTimes[1] += (inout === 'IN')? -mi : mi;
        }
        
        answer.push(getTotalFee(totalTimes[0]*60 + totalTimes[1]));
    }
    
    return answer;
}