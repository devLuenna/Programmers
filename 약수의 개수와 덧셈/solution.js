function solution(left, right) {
    
    //약수 구하는 함수(출력: 배열)
    function divisors(integer) {
        let arr = []
        for(var i=1; i<=integer; i++) {
            if(integer % i == 0) {
                arr.push(i)
            }
        }
        return arr;
    }
    
    let result = 0

    for(let i = left; i<= right; i++){
        if(divisors(i).length % 2 === 0){ //약수개수가 짝수라면
            result = result + i
        }
        else{
            result = result - i
        }
    }
    return result

}