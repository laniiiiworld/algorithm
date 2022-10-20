//정현이가 원하는 제품과 수량이 할인하는 날짜와 10일 연속으로 일치하는지 확인
function compareShoppingList(want, number, nowDiscounts) {
    let index = 0;
    while(index < want.length) {
        const count = nowDiscounts.get(want[index]) || 0;
        if(count < number[index]) return 0;
        index++;
    }
    return 1;
}

function solution(want, number, discount) {
    let answer = 0;
    let nowDiscounts = new Map(); //10일 동안 할인하는 상품들
    let index = 0;
    let count = 0;
    
    //1일차 확인
    while(index < 10) {
        count = nowDiscounts.get(discount[index]) || 0;
        nowDiscounts.set(discount[index], count + 1);
        index++;
    }
    
    answer += compareShoppingList(want, number, nowDiscounts);
    
    //2일차부터 확인
    for(index=1; index<=discount.length-10; index++) {
        //전날 할인상품 수량 - 1
        count = nowDiscounts.get(discount[index-1]);
        nowDiscounts.set(discount[index-1], count - 1);
        //10일차 할인상품 수량 + 1
        count = nowDiscounts.get(discount[index+9]) || 0;
        nowDiscounts.set(discount[index+9], count + 1);
        
        answer += compareShoppingList(want, number, nowDiscounts);
    }
    
    return answer;
}