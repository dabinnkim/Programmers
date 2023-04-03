function solution(n, k) {

    if(n>=10){
         var 서비스 = Math.floor(n/10)
         return (n*12000) + ((k-서비스)*2000)
    }else{
        return n*12000 + k*2000
    }
    
}