function solution(stones, k) {
    const binarySearch = (start, end) => {
        while (start <= end) {
            const middle = parseInt((start + end) / 2);
            
            let count = 0;
            for (const stone of stones) {
                if (stone <= middle) {
                    count++;
                } else {
                    count = 0;
                }
                if (count >= k) break;
            }

            if (count >= k) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
        return start;
    };
    
    return binarySearch(0, 200000000);
}