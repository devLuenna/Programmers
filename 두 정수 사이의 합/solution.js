function solution(a, b) {
    
    
    if(a>b){
        let x = a
        a = b
        b = x
    }
    
    let sum = 0;
    for(let i=a; i<=b; i++){
        sum = sum+i
    }
    return sum;
}