function solution(array) {
    //배열오름차순, 배열길이/2의 정수
    return array.sort((a,b)=>a-b)[Math.floor((array.length)/2)]
}