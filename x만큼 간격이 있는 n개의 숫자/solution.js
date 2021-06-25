function solution(x, n) {
    let arr = [x];
    let firstNum = x
    for(let i=1; i<n; i++){
        firstNum = firstNum+x
        arr.push(firstNum)
    }
    return arr;
}