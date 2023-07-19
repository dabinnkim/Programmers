function solution(arr) {
  let 합 = arr.reduce((a, b) => a + b) * arr.reduce((a, b) => a + b);
  let 곱 = arr.reduce((a, b) => a * b);
  return 곱 < 합 ? 1 : 0;
}