function solution(toppings) {
    const cake1 = new Map();
    const cake2 = new Map();
    
    cake1.set(toppings[0], 1);
    for(let i = 1; i < toppings.length; i++) {
        cake2.set(toppings[i], cake2.get(toppings[i]) + 1 || 1);
    }

    let answer = cake1.size === cake2.size? 1 : 0;
    
    for(let i = 1; i < toppings.length; i++) {
        const count1 = cake1.get(toppings[i]) || 0;
        const count2 = cake2.get(toppings[i]) || 0;
        
        cake1.set(toppings[i], count1 + 1);
        
        if(count2 > 1) {
            cake2.set(toppings[i], count2 - 1);
        } else {
            cake2.delete(toppings[i]);
        }
        
        if(cake1.size > cake2.size) break;
        if(cake1.size !== cake2.size) continue;
        
        answer += 1;
    }
    
    return answer;
}