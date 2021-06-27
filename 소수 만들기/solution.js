function solution(nums) {
    //조합으로 2차원 배열 생성, nC3
    //거기서 모든 요소의 합이 소수인 것만 걸러내어
    //전체 배열의 길이 리턴
 const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); //=[[], [], []]
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]);//합치기 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });                                                                                                
    return results; // 결과 담긴 results return
  }
 
 const resultArr = getCombinations(nums, 3)
 for(let i=0; i<resultArr.length; i++){
    resultArr[i] = resultArr[i].reduce((acc, cur)=>acc+cur, 0)
  } //모든 요소의 합으로 배열의 요소들을 치환한 다음,,,
  

 function isPrime(num) {
  if (num === 1) { //1은 소수 아님
    return false;
  }
  if (num === 2) { //2는 소수 맞음
    return true;
  }
  if (num % 2 === 0) { //2의 배수는 default로 소수 아님
    return false;
  }
  for (let n = 3; n < num; n+=2) { //2의 배수들은 어차피 나눠봤자 소용없으므로 홀수만 체크하기 위함. 
    if (num % n === 0) {
      return false;
    }
  }
  //나머지 경우에는 모두 소수가 맞음!
  return true;
}   
    let arrAnswer = resultArr.filter(isPrime)
    return arrAnswer.length
}