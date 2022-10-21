function solution(queue1, queue2) {
    let sum1 = queue1.reduce((a, b) => a + b)
    let sum2 = queue2.reduce((a, b) => a + b)
    let i1 = 0
    let i2 = 0
    let answer = 0
    let maxCount = queue1.length * 2 + 2
    while (sum1 !== sum2) {
        if (maxCount-- === 0) {
            return -1
        }
        if (sum1 < sum2) {
            const i = i2++
            const item = i < queue2.length ? queue2[i] : queue1[i % queue2.length]
            sum2 -= item
            sum1 += item
        } else {
            const i = i1++
            const item = i < queue1.length ? queue1[i] : queue2[i % queue1.length]
            sum1 -= item
            sum2 += item
        }
        answer++
    }
    return answer;
}