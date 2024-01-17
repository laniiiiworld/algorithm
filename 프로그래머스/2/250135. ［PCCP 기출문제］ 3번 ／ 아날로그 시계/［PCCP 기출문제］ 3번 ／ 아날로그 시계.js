function solution(h1, m1, s1, h2, m2, s2) {
    const degrees = { // 1초동안 움직이는 각도
        hh: 360 / (12 * 3600),
        mi: 360 / 3600,
        ss: 360 / 60
    };
    const nowDegrees = { // 시작하는 각도
        hh: (h1 * 3600 + m1 * 60 + s1) * degrees.hh,
        mi: Number(((m1 * 60 + s1) * degrees.mi).toFixed(1)),
        ss: s1 * degrees.ss
    };
    
    minusOverDegree(nowDegrees);
    const prevDegrees = { // 1초 전 각도
        hh: nowDegrees.hh,
        mi: nowDegrees.mi,
        ss: nowDegrees.ss
    };
    
    let count = 0;
    if(nowDegrees.ss === nowDegrees.mi
      || Math.floor(nowDegrees.mi) === Math.floor(nowDegrees.hh)) {
        count += 1;
    }
    
    let seconds = getSeconds(h2, m2, s2) - getSeconds(h1, m1, s1);
    while(seconds--) {
        moveOneSecond(degrees, prevDegrees, nowDegrees);
        
        const checkCount = checkAlarm(prevDegrees, nowDegrees);
        minusOverDegree(nowDegrees);
        
        if(!checkCount) continue;
        
        count += checkCount;
    }
    
    return count;
}

function getSeconds(hh, mi, ss) {
    return hh * 3600 + mi * 60 + ss;
}

function moveOneSecond(degrees, prevDegrees, nowDegrees) {
    // 1초 전 각도 갱신
    prevDegrees.hh = nowDegrees.hh;
    prevDegrees.mi = nowDegrees.mi;
    prevDegrees.ss = nowDegrees.ss;
    // 1초동안 시, 분, 초침 움직이기
    nowDegrees.hh += degrees.hh;
    nowDegrees.mi = Number((nowDegrees.mi + degrees.mi).toFixed(1));
    nowDegrees.ss += degrees.ss;
}

function minusOverDegree(nowDegrees) {
    if(nowDegrees.ss >= 360) nowDegrees.ss -= 360;
    if(nowDegrees.mi >= 360) nowDegrees.mi -= 360;
    if(nowDegrees.hh >= 360) nowDegrees.hh -= 360;
    // if(nowDegrees.ss >= 360) {
    //     nowDegrees.ss = 0;
    //     nowDegrees.mi = Number(nowDegrees.mi.toFixed(1));
    //     nowDegrees.hh = Number(nowDegrees.hh.toFixed(1));
    // }
    // if(nowDegrees.mi >= 360) {
    //     nowDegrees.mi = 0;
    //     nowDegrees.hh = Math.round(nowDegrees.hh);
    // }
    // if(nowDegrees.hh >= 360) {
    //     nowDegrees.hh = 0;
    // }
}

function hasMeet(a, b, prevDegrees, nowDegrees) {
    if(prevDegrees[a] < prevDegrees[b] && nowDegrees[a] >= nowDegrees[b]) {
        return true;
    }
    return false;
}

function checkAlarm(prevDegrees, nowDegrees) {
    let count = 0;
    if(hasMeet('ss', 'mi', prevDegrees, nowDegrees)) count += 1;
    if(hasMeet('ss', 'hh', prevDegrees, nowDegrees)) count += 1;
    if(hasMeet('ss', 'mi', prevDegrees, nowDegrees) 
       && hasMeet('mi', 'hh', prevDegrees, nowDegrees)) count -= 1;
    return count;
}