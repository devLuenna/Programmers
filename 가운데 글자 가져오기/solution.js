function solution(s) {
    
    let len = s.length 
    // if(len===1){
    // return s;
    // }
    if(len % 2 ===0){
    return s[len/2-1]+s[len/2]
    }
    else{
    return s[len/2-0.5]
    }
}