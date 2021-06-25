function solution(arr) {
    
    if(arr.length === 1){
    return [-1]
    }
    
    let minValue = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<minValue){
        minValue = arr[i]}
    }
    return arr.filter(function(el){
    return el !== minValue})
    
    
}