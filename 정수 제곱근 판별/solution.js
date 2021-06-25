function solution(n) {
    //Math.sqrt(); --> 얘네가 소수점으로 떨어지는 게 아니라면?
    
    if(Math.sqrt(n)%1 === 0){
        return (Math.sqrt(n)+1)*(Math.sqrt(n)+1)
    }
    else{
        return -1;
    }
}