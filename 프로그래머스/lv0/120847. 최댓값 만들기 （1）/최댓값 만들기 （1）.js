function solution(numbers) {
    const arr = numbers.sort((a,b)=>b-a) //내림차순
    return arr[0]*arr[1]
}