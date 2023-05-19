function solution(n, t, m, timetable) {
    const getHH24MM = (minutes) => {
        const hh24 = String(~~(minutes / 60));
        const mm = String(minutes % 60);
        return `${hh24.padStart(2, '0')}:${mm.padStart(2, '0')}`;
    };
    const members = timetable.map(time => {
        const [hh24, mm] = time.split(':').map(Number);
        return hh24 * 60 + mm;
    }).sort((a, b) => b - a);
    const buses = [];
    let nowBus = 60 * 9;
    
    while(buses.length < n && members.length) {
        const bus = [];
        
        while(bus.length < m && members[members.length - 1] <= nowBus) {
            bus.push(members.pop());
        }
        
        buses.push(bus);
        nowBus += t;
    }
    
    const bus = buses[buses.length - 1].sort((a, b) => b - a);
    if(buses.length === n && bus.length === m) {
        return getHH24MM(bus[0] - 1);
    }
    
    return (bus.length < m)? getHH24MM(nowBus - t) : getHH24MM(nowBus);
}