function solution(hp) {
    const 장군 = Math.floor(hp/5); //hp를 5로 나눈 정수 몫 구하기
    const 병정 = Math.floor(hp%5/3); //hp를 5로 나누고 그 나머지 값을 3으로 나누기
    const 일 = hp - (장군*5+병정*3)
  
  return 장군 + 병정 + 일
}

//1. 5로 나누기
//2. 3으로 나누기