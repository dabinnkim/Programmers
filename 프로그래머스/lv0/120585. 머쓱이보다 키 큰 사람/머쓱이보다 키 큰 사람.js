function solution(array, height) {
    var answer = array.filter(element => element>height).length;
    return answer;
}