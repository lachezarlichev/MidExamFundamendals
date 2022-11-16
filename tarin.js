function train(input) {
  let result = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let maxNumber = Number(input.shift());
  let copy = input.slice();
  let comands = copy.shift();
  for (let i = 0; i < input.length; i++) {
    let lineArr = comands.split(" ");
    if (lineArr.length > 1) {
      let first = lineArr[0];
      let second = Number(lineArr[1]);
      result.push(second);
    } else {
      let num = Number(lineArr[0]);
      for (let i = 0; i < result.length; i++) {
        let current = result[i];
        if (current + num <= maxNumber) {
          result[i] += num;
          break;
        }
      }
    }

    comands = copy.shift();
  }
  console.log(result.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
