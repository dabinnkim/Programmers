function solution(a,b){
    return Math.max(`${a}${b}`,`${b}${a}`)
}
// function solution(a, b) {
//     const aa = a.toString()+b.toString()
//     const bb = b.toString()+a.toString()
//     if(aa>bb){
//         return Number(aa)
//     }else{return Number(bb)}
// }