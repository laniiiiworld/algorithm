function solution(today, terms, privacies) {
    const TODAY = new Date(today);
    const standard = new Map();
    for(const term of terms) {
        const [type, month] = term.split(' ');
        standard.set(type, Number(month));
    }
    
    return privacies
                .map((privacy, index) => {
                    const [start, type] = privacy.split(' ');
                    const expired = new Date(start);
                    expired.setMonth(expired.getMonth() + standard.get(type));
                    
                    return {id: index + 1, expired: new Date(expired)};
                })
                .filter(item => item.expired <= TODAY)
                .map(item => item.id);
}