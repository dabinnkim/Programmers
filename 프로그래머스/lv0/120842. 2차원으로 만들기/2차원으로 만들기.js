function solution(num_list,n){
    const arr = []
    
    while(num_list.length){
        arr.push(num_list.splice(0,n)) //splice : 인덱스0부터 n개의 요소 추출
    }return arr
}
// function solution(num_list, n) {
//     // 정답배열 생성
//     const result = []
//     // 전 범위 순환
//     for(let i = 0 ; i < num_list.length; ) {
//         const sliceN = []
//         // n만큼 배열 생성
//         for(let j = 0 ; j < n ; j++) {
//             sliceN.push(num_list[i])
//             i++
//         }
//         result.push(sliceN)
//     }
//     return result
// }
