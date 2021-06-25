function solution(nums) {
    //최대한 많은 종류의 포켓몬을 가지고 싶음.
    //N마리의 포켓몬 종류 번호가 담긴 배열 nums가 매개변수..
    //N/2마리의 포켓몬을 선택하는 방법 중, 가장 많은 종류의 선택..
    //그 때 종류 번호의 개수를 return
    
    // nums에서 중복된 것 모두 삭제해야 함.
    
    const noOverlaps = nums.filter((item, index) => nums.indexOf(item) === index);
    if(noOverlaps.length<(nums.length/2)){
        return noOverlaps.length
    } else{ 
        return nums.length/2
    }
   
}