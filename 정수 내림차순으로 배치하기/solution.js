function solution(n) {
    let str = String(n)
    let newArr = str.split('');
    newArr.sort(function(a, b) { // 오름차순
    return b - a;
    // 1, 2, 3, 4, 10, 11
});        
    let newStr = newArr.join(''); 
    return parseInt(newStr)
    
}