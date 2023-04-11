function solution(arr){
    let answer = []; //빈배열 만들기
    let sortedArr = [...arr].sort((a, b) => b-a); //내림차순

    for(let i =0; i<arr.length; i++){
        answer.push(sortedArr.indexOf(arr[i])+1) //sortedArr의 배열에서 arr[i]와 같은 요소를 찾고 찾은 요소의 인덱스에 1을 더한 값을 answer에 push
    }
    return answer
}

console.log(solution([29,100,38,2,3]))