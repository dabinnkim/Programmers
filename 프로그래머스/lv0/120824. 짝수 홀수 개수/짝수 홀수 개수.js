function solution(arr){
    const 짝수 = arr.filter(e => e%2==0).length
    const 홀수 = arr.filter(e => e%2!==0).length

    return [짝수,홀수]
}
