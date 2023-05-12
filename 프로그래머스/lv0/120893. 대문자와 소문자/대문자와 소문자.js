function solution(str){
    return str.split('').map((n)=> n===n.toUpperCase()? n.toLowerCase():n.toUpperCase()).join('')
}

// function solution(str){
//   const arr = str.split('');
//   let newArr = '';
//   for(let i =0; i<arr.length; i++){
//     if(arr[i]===arr[i].toUpperCase()){
//       newArr+=arr[i].toLowerCase()
//     }else if(arr[i]===arr[i].toLowerCase()){
//       newArr+=arr[i].toUpperCase()
//     }
//   }return newArr
// 