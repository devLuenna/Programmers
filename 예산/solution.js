function solution(d, budget) {
    //배열 d 오름차순 정리
    //budget에서 0번째 인덱스값부터 빼기
    d.sort(function(a, b)  {
        return a - b;
    });
    
    let count = 0
    while(budget>=0){
        budget = budget-d.shift(); 
        count++        
    }
    return count-1
//     let dSum = 0
//     for(let i=0; i<d.length; i++){
//         if(dSum>=budget){
//             return i+1;
//             break;
//         }
//         dSum = dSum+d[i]
//     }
    
}