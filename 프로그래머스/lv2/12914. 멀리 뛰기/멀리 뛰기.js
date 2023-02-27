function solution(n) {
    const stack = [1];
    while(stack.length < n) {
        //(n칸을 뛰는 방법) = (1칸을 뛰고 n-1칸을 뛰는 방법) + (2칸을 뛰고 n-2칸을 뛰는 방법)
        const a = stack[stack.length - 2] || 1;
        const b = stack[stack.length - 1];
        stack.push((a + b) % 1234567);
    }
    return stack[stack.length - 1];
}