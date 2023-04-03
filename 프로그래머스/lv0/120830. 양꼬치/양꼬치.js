// function solution(n, k) {

//     if(n>=10){
//          var 서비스 = Math.floor(n/10)
//          return (n*12000) + ((k-서비스)*2000)
//     }else{
//         return n*12000 + k*2000
//     }
    
// }


function solution(n, k) {
  const costOfFood = n * 12000;  // 양꼬치 가격 계산
  const numOfFreeDrinks = Math.floor(n / 10);  // 무료 음료 개수 계산
  const numOfPaidDrinks = k - numOfFreeDrinks;  // 유료 음료 개수 계산
  const costOfDrinks = numOfPaidDrinks * 2000;  // 유료 음료 가격 계산
  const totalCost = costOfFood + costOfDrinks;  // 총 지불 금액 계산
  
  return totalCost;
}