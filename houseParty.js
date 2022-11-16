function houseParty(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    let lineArr = current.split(" ");
    let name = lineArr[0];
    if (lineArr.includes("not")) {
      if (result.includes(name)) {
        let index = result.indexOf(name);
        result.splice(index, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (!result.includes(name)) {
        result.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    }
  }
  console.log(result.join(" \n"));
}
houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
