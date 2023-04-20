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