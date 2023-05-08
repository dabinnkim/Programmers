function solution(n){
    const arr=[]
    for(let i =1; i<=n; i++){
        console.log(i)
        const arr2 = []
        for(let j=1; j<=i; j++){
            if(i%j===0){
                arr2.push(j);
            }
        }if(arr2.length>=3){
            arr.push(i)
        }
    }return arr.length
}