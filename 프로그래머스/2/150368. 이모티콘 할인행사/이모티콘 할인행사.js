function solution(users, emoticons) {
    users = users
            .map(([rate,price]) => [Math.ceil(rate / 10) * 10, price])
            .sort((a, b) => a[0] - b[0]);
    
    const getDiscounts = (users) => {
        const result = [];
        for(let i = users[0][0]; i <= users[users.length - 1][0]; i += 10) {
            result.push(i);
        }
        return result;
    };
    const discounts = getDiscounts(users);
    
    const discountPrice = Array.from({length: emoticons.length}, () => Array(discounts.length).fill(0));
    for(let i = 0; i < emoticons.length; i++) {
        for(let j = 0; j < discounts.length; j++) {
            discountPrice[i][j] = [discounts[j], emoticons[i] * (100 - discounts[j]) / 100];
        }
    }
    
    const getPriceCombination = () => {
        const result = [];
        const dfs = (row, arr) => {
            if(arr.length === discountPrice.length) {
                result.push(arr);
                return;
            }
            for(let i = 0; i < discountPrice[row].length; i++) {
                dfs(row + 1, [...arr, discountPrice[row][i]]);
            }
        };
        dfs(0, []);
        return result;
    };
    const combination = getPriceCombination();
    
    let maxCount = 0;
    let maxPrice = 0;
    for(const prices of combination) {
        const {count, price} = users.reduce((acc, [rate, hasMoney]) => {
            let {count, price} = acc;
            let sum = prices.reduce((acc, [combiRate, combiPrice]) => acc += (rate <= combiRate)? combiPrice : 0, 0);
            if(sum >= hasMoney) {
                count += 1;
            } else {
                price += sum;
            }
            return {count, price};
        }, {count: 0, price: 0});
        if(maxCount < count) {
            maxCount = count;
            maxPrice = price;
        } else if(maxCount === count && maxPrice < price) {
            maxPrice = price;
        }
    }
    
    return [maxCount, maxPrice];
}