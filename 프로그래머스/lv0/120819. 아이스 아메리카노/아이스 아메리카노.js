function solution(money) {
    var answer = [];
    answer[0]=Math.floor(money/5500); //Math.floor : 소수점 버림
    answer[1]=money%5500;
    return answer;
}