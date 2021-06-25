function solution(phone_number) {
    let newNum = ''
    for(let i=0; i<phone_number.length-4; i++){
        newNum = newNum+'*'
    }
    for(let i=phone_number.length-4; i<phone_number.length; i++){
        newNum = newNum+phone_number[i]
    }
    return newNum;
}