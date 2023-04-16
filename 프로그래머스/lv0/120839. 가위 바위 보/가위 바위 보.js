function solution(num){
    const arr =[]
    num.split('').map(e=>{
        if (e==0){
            arr.push(5)
        }else if(e==2){
            arr.push(0)
        }else{
            arr.push(2)
        }
    })
    return arr.join('')
}