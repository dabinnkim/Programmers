function solution(array) {
    //1.오름차순으로 배열 만들어주기
    let sortedArray = array.sort((a,b)=>a-b);
    let cnt = 0;
    
    let choi = -1 //최빈값이 뭔지
    let choiRepeatCnt=0; //최빈값이 될때 몇번 반복해서 된건지
    let repeatCnt = 0; //현재 똑같은 숫자가 몇번 등장했는지
    let beforeNum=0;//지금 보고있는 숫자의 이전숫자
    let isDupChoi=false;
    while(cnt<array.length){
        //배열[0]~ 차례대로 원소를 확인
        if(beforeNum!==array[cnt]){
            repeatCnt=1;
        }else{
            repeatCnt=repeatCnt+1;
        }
        
        if(repeatCnt===choiRepeatCnt){
            if(choi!==array[cnt]){
                isDupChoi=true;
            }
        }
        
        if(repeatCnt>choiRepeatCnt){
            choi=array[cnt];
            choiRepeatCnt=repeatCnt;
            isDupChoi=false;
        }
        beforeNum=array[cnt]
        cnt+=1;
    }
    if(isDupChoi) return -1
    return choi;
}

//1. 배열의 앞부분부터 차례대로 원소를 확인하며 갯수를 센다.
//2. 최빈값을 그때그때 기록한다.