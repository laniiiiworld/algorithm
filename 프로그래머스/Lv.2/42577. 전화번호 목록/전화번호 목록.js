function solution(phone_book) {
    phone_book.sort();
    
    for(let i = 1; i < phone_book.length; i++) {
        const before = phone_book[i - 1];
        const next = phone_book[i];
        if(before === next.slice(0, before.length)) return false;
    }
    
    return true;
}