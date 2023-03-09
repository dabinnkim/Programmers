function solution(numbers) {
    let result = numbers.reduce(function add(sum,element){
        return sum+element
    })
    return result/numbers.length;
}