function solution(num1,denum1,num2,denum2){
    var answer = []
    //분자
    let num = (num1*denum2) + (denum1*num2);
    //분모
    let denum = denum1*denum2

    let gcd = 1;

    for(let i=2; i<=Math.min(num, denum); i++){
        if(num % i === 0 && denum % i === 0){
            gcd = i;
        }
    }
    
    answer.push(num/gcd, denum/gcd)
    return answer
}
