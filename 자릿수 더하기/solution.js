function solution(n){
    let str = String(n);
    let arr = str.split('')
    for(let i=0; i<arr.length; i++){
        arr[i] = parseInt(arr[i])
    }
    
    return arr.reduce((acc, cur)=> acc+cur)
}