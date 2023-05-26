function solution(enroll, referral, seller, amount) {
    const members = new Map();
    const setMoney = (key, plus) => {
        const member = members.get(key) || {money : 0, parent: ''};
        const minus = Math.floor(plus * 0.1);
        members.set(key, {...member, money : member.money + plus - minus});
        if(minus > 0) {
            setMoney(member.parent, minus);
        }
    };
    
    for(let i = 0; i < enroll.length; i++) {
        members.set(enroll[i], {money : 0, parent: referral[i]});
    }
    
    for(let i = 0; i < seller.length; i++) {
        const key = seller[i];
        const member = members.get(key);
        setMoney(key, amount[i] * 100);
    }
    
    return enroll.map(v => members.get(v).money);
}