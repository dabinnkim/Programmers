function solution(num) {
  let newArr = num.split("").map((a) => Number(a));
  return newArr.reduce((a, b) => a + b);
}