/**
 * 문자열 str에 대한 다중 집합을 구하는 함수
 */
function getMultipleSets(str) {
    const arr = [];
    for(let i=0; i<str.length-1; i++) {
        const item = `${str[i]}${str[i+1]}`;
        if(/[^a-zA-Z]/g.test(item)) continue;
        arr.push(item.toUpperCase());
    }
    return arr;
}

/**
 *  두 배열의 교집합 개수를 구하는 함수
 */
function getIntersectionCount(longArr, sortArr) {
    let count = 0;
    for(let i=0; i<longArr.length; i++) {
        if(sortArr.length === 0) break;
        const index = sortArr.indexOf(longArr[i]);
        if(index === -1) continue;
        sortArr.splice(index, 1);
        count++;
    }
    return count;
}

function solution(str1, str2) {
    const arr1 = getMultipleSets(str1);
    const arr2 = getMultipleSets(str2);
    
    let longArr;
    let sortArr;
    if(Math.max(arr1.length, arr2.length) === arr1.length) {
        longArr = arr1;
        sortArr = arr2;
    } else {
        longArr = arr2;
        sortArr = arr1;
    }
    
    const intersection = getIntersectionCount(longArr, sortArr);
    const union = longArr.length + sortArr.length;
    const jaccard = intersection || union? intersection/union : 1;
    return Math.floor(jaccard * 65536);
}