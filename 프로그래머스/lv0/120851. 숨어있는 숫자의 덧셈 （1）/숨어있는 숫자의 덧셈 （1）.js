function solution(my_string) {
    const arr = my_string.match(/\d+/g).join('').split('').map(e=>parseInt(e));
    return arr.reduce((acc,cur)=>acc+cur)

}