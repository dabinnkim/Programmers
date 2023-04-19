function solution(balls, share) {
  let numerator = 1;
  let denominator = 1;
  
  for (let i = balls; i > balls - share; i--) {
    numerator *= i;
  }
  
  for (let j = share; j > 0; j--) {
    denominator *= j;
  }
  
  return numerator / denominator;
}