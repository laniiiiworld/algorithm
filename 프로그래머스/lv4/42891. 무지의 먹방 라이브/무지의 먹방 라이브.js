function solution(food_times, k) {
    let sortedFood = food_times
                        .map((time, index) => ({ time, index: index + 1 }))
                        .sort((a, b) => a.time - b.time );

    let beforeTime = 0;
    for (let i = 0; i < sortedFood.length; i += 1) {
        const time = sortedFood[i].time;
        const cycle = sortedFood.length - i;
        const cycleTime = (time - beforeTime) * cycle;

        if (k < cycleTime) {
          const answer = sortedFood.slice(i).sort((a, b) => a.index - b.index);
          return answer[k % cycle].index;
        }

        k -= cycleTime;
        beforeTime = time;
    }

    return -1;
}