function solution(array,n){
    let answer = array.filter(element => element===n).length
    return answer
}

console.log([1,1,2,3,4,5],1)