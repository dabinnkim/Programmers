function solution(arr1,arr2){
    return arr1.filter(e=>arr2.includes(e)).length
}