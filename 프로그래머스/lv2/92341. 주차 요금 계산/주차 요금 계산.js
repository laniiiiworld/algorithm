function solution(fees, records) {
    const [baseMinute, basePrice, unitMinute, unitPrice] = fees;
    const getMinute = (time) => {
        const [hh24, mm] = time.split(':').map(Number);
        return hh24 * 60 + mm;
    };
    const getFee = (minute) => {
        minute -= baseMinute;
        if(minute <= 0) return basePrice;
        return basePrice + Math.ceil(minute / unitMinute) * unitPrice;
    };
    
    const cars = new Map();
    for(const record of records) {
        const [time, car, inout] = record.split(' ');
        const mm = getMinute(time);
        const times = cars.get(car) || [];
        times.push(inout === 'IN'? -1 * mm : mm);
        cars.set(car, times);
    }
    
    return [...cars.keys()]
            .sort((a, b) => a - b)
            .map(car => {
                const times = cars.get(car);
                if(times.length % 2) times.push(getMinute('23:59'));
                const totalTime = times.reduce((acc, cur) => acc += cur, 0);
                return getFee(totalTime);
            });
}