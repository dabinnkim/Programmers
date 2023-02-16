function solution(common) {
   //common에 들어갈 요소 개수 3개 이상
    //등차수열, 등비수열 두가지 경우만 있음
    //인덱스 1번, 0번의 차와 인덱스 2번, 1번의 차가 같으면 등차수열
    //그외는 등비수열
    var answer = common[1]-common[0] === common[2]-common[1]

    if(answer){
        //array 마지막 값에 등차 값 더해줌 
        return common.pop() + (common[1]-common[0]) 
    }else{
        //등비는 마지막 값에 인덱스1번을 인덱스0으로 나눈 값을 곱해줌
        return common.pop() * (common[1]/common[0])
    }
}
