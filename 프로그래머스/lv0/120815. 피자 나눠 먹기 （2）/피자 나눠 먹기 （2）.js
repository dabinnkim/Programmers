function solution(n){
   let b = 6;
   //최대공약수
   let max = (n,b) => n%b==0? b : max(b,n%b);
   //최소공배수 = 두수 곱한값을 최대공약수로 나눈 값
   let min = n*6/max(n,b)
   //피자개수 = 최소공배수/6 
   let result = min/b
   return result
}