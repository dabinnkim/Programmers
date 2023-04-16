//① 객체만들기
function solution(num){
   let arr = {
    0:5,
    2:0,
    5:2
   }
   return [...num].map(e=>arr[e]).join('')
}

//② map()안에서 삼항연산자
/*
function solution1(num1){
    return [...num1].map(e=>
        e==0? 5:(e==2? 0:2)
    ).join('')
}
*/

// function solution(num){
//     const arr =[]
//     num.split('').map(e=>{
//         if (e==0){
//             arr.push(5)
//         }else if(e==2){
//             arr.push(0)
//         }else{
//             arr.push(2)
//         }
//     })
//     return arr.join('')
// }