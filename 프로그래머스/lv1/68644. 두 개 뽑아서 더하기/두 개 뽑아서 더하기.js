function solution(numbers) {
    const numberSet = new Set();

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            numberSet.add(numbers[i] + numbers[j]);
        }
    }

    return [...numberSet].sort((a,b) => a-b);
}