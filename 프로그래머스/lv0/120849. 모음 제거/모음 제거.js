function solution(my_string){
    var answer = {
        a:'a',
        e:'e',
        i:'i',
        o:'o',
        u:'u'
    }
    const arr = my_string.split('') //배열로 만들기
    return arr.filter(e => e=!answer[e]).join('')
}

//문장을 split로 배열로 만들고
//filter 사용해 'answer 객체에 없는 문자'를 조건으로 줘서 새로운 배열로 만들고 
//join으로 문자열로 만들기
