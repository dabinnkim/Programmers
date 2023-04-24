function solution(n) {
    const arr = n.toString().split('').map(e=>parseInt(e))
    return arr.reduce((acc,cur) => acc+cur)
}