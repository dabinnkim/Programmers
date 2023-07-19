function solution(dot) {
  //둘다 양수
  if (dot[0] > 0 && dot[1] > 0) {
    return 1;
  }
  //0은 양수, 1은 음수
  else if (dot[0] > 0 && dot[1] < 0) {
    return 4;
  }
  //0은 음수, 1은 양수
  else if (dot[0] < 0 && dot[1] > 0) {
    return 2;
  }
  //둘다 음수
  else {
    return 3;
  }
}