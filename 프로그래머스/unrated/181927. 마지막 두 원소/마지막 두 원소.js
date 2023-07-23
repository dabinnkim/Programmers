function solution(list) {
  const 마지막원소 = list[list.length - 1];
  const 마지막전원소 = list[list.length - 2];
  if (마지막원소 > 마지막전원소) {
    list.push(마지막원소 - 마지막전원소);
  } else {
    list.push(마지막원소 * 2);
  }

  return list;
}