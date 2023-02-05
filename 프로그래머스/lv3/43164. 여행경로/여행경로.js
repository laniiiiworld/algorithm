// 출처: https://leetcode.com/problems/reconstruct-itinerary/solutions/437594/super-easy-and-clean-javascript-greedy-dfs-with-detailed-explanations/?languageTags=javascript
function solution(tickets) {
    const answer = [];
    const citiesMap = {};
    const makeCourse = (node) => {
        const destinations = citiesMap[node];
        while(destinations && destinations.length) {
            makeCourse(destinations.shift());
        }
        answer.push(node);
    };
    
    tickets.forEach(([start, end]) => {
        if(!citiesMap[start]) citiesMap[start] = [];
        citiesMap[start].push(end);
    });
    
    for(const city in citiesMap) {
        citiesMap[city].sort();
    }  
    
    makeCourse('ICN');
    return answer.reverse();
}