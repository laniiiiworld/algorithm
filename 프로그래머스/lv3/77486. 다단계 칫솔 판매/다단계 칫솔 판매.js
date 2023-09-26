function solution(enroll, referral, seller, amount) {
    const parent = enroll.reduce((par, name, i) => {
        par[name] = referral[i];
        return par;
    }, {});
    const result = enroll.reduce((res, name) => {
        res[name] = 0;
        return res;
    }, {});
    const go = (name, benefit) => {
        if(name === '-' || benefit === 0) return;
        const up = parseInt(benefit / 10, 10);
        result[name] += benefit - up;
        go(parent[name], up);
    };
    seller.forEach((name, i) => {
        go(name, amount[i] * 100);
    })
    return Object.values(result);
}