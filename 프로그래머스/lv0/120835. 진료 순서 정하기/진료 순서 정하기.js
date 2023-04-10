function solution(arr) {
  let answer = [];
  let sortedArr = [...arr].sort((a, b) => b - a);

  for (let i = 0; i < sortedArr.length; i++) {
    answer.push(sortedArr.indexOf(arr[i]) + 1);
  }

  return answer;
}
let arr = [87, 89, 92, 100, 76];

/*
내림차순으로 정렬 후 1,2,3 순위 결정
*/