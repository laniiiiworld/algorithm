function solution(a) {
    const remained = new Set();
    let [leftIndex, rightIndex] = [0, a.length - 1];
    let [leftMinValue, rightMinValue]  = [Infinity, Infinity];

    for(let i = 0; i < a.length; i++) {
        if(leftMinValue > a[leftIndex]) {
            leftMinValue = a[leftIndex];
            remained.add(a[leftIndex]);
        }

        if(rightMinValue > a[rightIndex]) {
            rightMinValue = a[rightIndex];
            remained.add(a[rightIndex]);
        }

        leftIndex++;
        rightIndex--;
    }
    
    return remained.size;
}