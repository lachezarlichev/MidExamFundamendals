function shtottingTarger(input) {
  let targets = input
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let currentLine = input.shift();
  while (currentLine != "End") {
    let lineArr = currentLine.split(" ");
    let commond = lineArr[0];
    let index = Number(lineArr[1]);
    let power = Number(lineArr[2]);

    switch (commond) {
      case "Shoot":
        if (targets[index]) {
          targets[index] -= power;
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }

        break;
      case "Add":
        if (targets[index]) {
          targets.splice(index, 0, power);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        let radius = power;
        let donwindex = index - power;
        let upperindex = index + power;
        if (targets[donwindex] && targets[upperindex]) {
          targets.splice(donwindex, radius * 2 + 1);
        } else {
          console.log("Strike missed!");
        }

        break;
    }

    currentLine = input.shift();
  }
  console.log(targets.join("|"));
}
shtottingTarger([
  "52 74 23 44 96 110",

  "Shoot 5 10",

  "Shoot 1 80",

  "Strike 2 1",

  "Add 22 3",

  "End",
]);
