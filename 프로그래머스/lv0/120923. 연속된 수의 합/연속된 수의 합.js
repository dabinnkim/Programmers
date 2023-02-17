//1. array의 초기값부터 구하기 2. Array.from() 메소드 사용하기
function solution(num, total) {
    
    //array의 초기값 min 구하기
    const min = Math.ceil((total/num) - Math.floor(num/2))
    //Array.from() 메서드로 초기값을 시작으로 num의 길이만큼 array 구하기
    return Array.from({length:num},(v,i)=>i+min) //i=0
    
}