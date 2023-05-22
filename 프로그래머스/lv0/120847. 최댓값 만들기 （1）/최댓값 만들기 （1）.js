function solution(num){
    const arr = num.sort((a,b)=>b-a)   
    return arr[0] * arr[1]
}