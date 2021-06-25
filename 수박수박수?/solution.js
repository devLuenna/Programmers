function solution(n) {
    let one = '수'
    let two = '수박'
    let result = ''
    //n이 짝수라면 --> n/2 하여 나온 값만큼 two를 반복한다
    //n이 홀수라면 --> n/2 하여 나온 값을 parseInt 한 만큼 two를 반복 --> 그리고 '수' 하나 붙이기
    
    if(n%2 === 0){
        for(let i=1; i<=n/2; i++){
            result = result+two
        }
    }
    else{
        for(let i=1; i<=parseInt(n/2); i++){
            result = result+two
        }
        result = result + one
    }
    
    
    return result;
}
