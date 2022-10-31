function solution(n, left, right) {
    const startLine = Math.floor(left/n);
    const endLine = Math.floor(right/n);
    let index = startLine;
    return new Array(endLine - startLine + 1).fill(0)
                       .reduce((acc, value) => {
                            const line = new Array(n).fill(0).map((v,i) => {
                                return (i<=index)? index + 1 : i + 1;
                            });
                            index++;
                            return acc.concat(line);
                        }, [])
                        .slice(left - startLine * n, right - startLine * n + 1);
}