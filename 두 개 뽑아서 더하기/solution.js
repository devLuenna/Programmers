function solution(numbers) {
    
    let answer = [];
    while(numbers.length>0){
        let firstNum = numbers.shift();
        for(let i=0; i<numbers.length; i++){
        answer.push(firstNum+numbers[i]);
        }
    } //순서대로 더해서 anwer에다가 쌓기
    
    let lastArr = answer.filter((item, index) => answer.indexOf(item) === index); //중복요소 삭제
    
    lastArr.sort(function(a, b) { // 오름차순
    return a - b;
    });
    
    
    return lastArr;
}