function manipulations(input) {
  let result = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let copyInput = input.slice();

  let comands = copyInput.shift(); 

  for (let i = 0; i < input.length; i++) {
    let lineAarr = comands.split(" ");
    let comand = String(lineAarr[0]);
    let index = Number(lineAarr[1]);
    let secondIndex = Number(lineAarr[2]);
    comands = copyInput.shift();

    switch (comand) {
      case "Add":
        result.push(index);
        break;
      case "Remove":
        let indexItem = result.indexOf(index);
        if (indexItem > -1) {
          result.splice(indexItem, 1);
        }
        break;
      case "RemoveAt":
        result.splice(index, 1);
        break;
      case "Insert":
        result.splice(secondIndex, 0, index);
        break;
    }
  }
  console.log(result.join(' '));
}
manipulations([
  "4 19 2 53 6 43",

  "Add 3",

  "Remove 2",

  "RemoveAt 1",

  "Insert 8 3",
]);
