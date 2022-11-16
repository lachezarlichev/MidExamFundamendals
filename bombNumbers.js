function bombNumbers(input1, input2) {
  let specialNUmber = input2.shift();
  let index = input2.shift();
  for (let i = 0; i < input1.length; i++) {
    let current = input1[i];
    if (current == specialNUmber) {
    // input1.splice(i, 1);
      let startIndex = i - index;
      if (startIndex < 0) {
        startIndex = 0;
      }
      let edndIndex = i + index  ;
      input1.splice(startIndex, edndIndex);
      for(let k = 0;k<input1.length;k++){
        let newCurrent = input1[k]
        if(newCurrent == specialNUmber){
          input1.splice(k,1)
          let start = k - index
          if(start < 0){
            start = 0
          }
          let end = k + index
          input1.splice(start,end)
        }
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < input1.length; i++) {
    let newcurrent = input1[i];
    sum += newcurrent;
  }
  console.log(sum);
}
bombNumbers(
  [1, 2, 2, 4, 2, 2, 2, 9],
  [4, 2]
);
