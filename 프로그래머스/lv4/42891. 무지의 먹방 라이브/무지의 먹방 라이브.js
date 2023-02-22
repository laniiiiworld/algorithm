function solution(food_times, k) {
    let foods = food_times.map((time, index) => ({number: index+1, time}))
                          .sort((a, b) => b.time - a.time);
    let previous = 0;
    while(foods.length) {
        const remainFoodsLength = foods.length;
        const currentTime = foods[remainFoodsLength - 1].time;
        const eatingTime = (currentTime - previous) * remainFoodsLength;
        previous = currentTime;
        
        if (k < eatingTime) {
            foods = [...foods].sort((a,b) => a.number - b.number);
            return foods[k % remainFoodsLength].number;
        }
        k -= eatingTime;
        foods.pop();
    }
    
    return -1;
}