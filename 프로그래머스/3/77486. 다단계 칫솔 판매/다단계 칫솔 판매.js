function solution(enroll, referral, seller, amount) {
    const peoples = new Map();
    const sendMoney = (next, plus) => {
        if(next === '-') return;
        const {parent, price} = peoples.get(next);
        const divided = Math.floor(plus * 0.1);
        peoples.set(next, {parent, price: price + plus - divided});
        if(divided > 0) {
            sendMoney(parent, divided);
        }
    };
    for(let i = 0; i < enroll.length; i++) {
        const member = enroll[i];
        const parent = referral[i];
        peoples.set(member, {parent, price: 0});
    }
    
    for(let i = 0; i < seller.length; i++) {
        const member = seller[i];
        const {parent, price} = peoples.get(member);
        const plus = amount[i] * 100;
        sendMoney(member, plus);
    }
    
    return enroll.map(member => peoples.get(member).price);
}