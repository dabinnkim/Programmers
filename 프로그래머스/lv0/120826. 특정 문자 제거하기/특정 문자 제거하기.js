function solution(my_string, letter) {
    let answer = my_string.split('').filter(e=> e!== letter);
    
    return answer.join('');
}