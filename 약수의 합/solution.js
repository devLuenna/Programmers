function solution(n) {
    

    let result = 0;
    for(var i=1; i<=n; i++) {
        if(n % i == 0) {
            result = result+i
        }
    }
    return result;

    


}