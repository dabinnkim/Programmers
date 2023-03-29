function solution(string,n){
    var answer = [...string].map(e=>e.repeat(n)).join('')
    return answer
}