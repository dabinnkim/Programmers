function solution(num) {
    var arr = [];
    for(let i =1; i<=num; i++){
        if(num%i===0){
            arr.push(i)
        }
    }
    return arr.length;
    
}