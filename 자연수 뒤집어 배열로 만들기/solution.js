function solution(n) {
    let str = String(n) //'12345'
    const reversed = str.split('').reverse(); //쪼개서 배열로 만들고 걔네들을 reverse시킴 //['5', '4', 3, 2, 1]
    
    return reversed.map((el) => parseInt(el))
}