function solution(age){
  return age.toString().split('').map((e)=>'abcdefghij'[e]).join('')
}

/*
age를 문자열로 바꾸고 split()으로 배열에 넣고
map으로 배열의 요소를 하나씩 꺼내서 알파벳의 인덱스로 주고
join()으로 배열을 문자열로 바꿈
*/