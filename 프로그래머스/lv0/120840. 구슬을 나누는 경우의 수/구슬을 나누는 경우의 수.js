function solution(balls, share) {
    var answer = 0;
    function factorial(n) {
        var x = BigInt(0)
        var y = BigInt(1)
        while (x < n) {
            x += BigInt(1)
            y *= x
        }
        return y
    }
    
    
    answer = factorial(balls) / (factorial(share) * factorial(balls-share))
    return answer;
}